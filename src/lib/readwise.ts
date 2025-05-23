import { Either } from './types/either';
import { ReadwiseBook } from './types/readwise';

type ExportError = 'auth' | string;

export const getReadwiseExportsSince = async (
  apiKey: string,
  updatedAfter?: string
): Promise<Either<ExportError, ReadwiseBook[]>> => {
  let fullData: ReadwiseBook[] = [];
  let nextPageCursor: string | null = null;
  
  while (true) {
    const queryParams = new URLSearchParams();
    if (nextPageCursor) {
      queryParams.append('pageCursor', nextPageCursor);
    }
    if (updatedAfter) {
      queryParams.append('updatedAfter', updatedAfter.toString());
    }
    console.log('Making readwise export api request with params ' + queryParams.toString());
    const response = await fetch(`https://readwise.io/api/v2/export/?${queryParams.toString()}`, {
      method: 'GET',
      headers: {
        Authorization: `Token ${apiKey}`,
      },
    });
    if (!response.ok) {
      if (response.status === 401) {
        return { success: false, error: 'auth' };
      }
      // check Retry-After header and retry
      else if (response.status === 429) {
        console.log('Hit rate limit, retrying...');
        await new Promise((resolve) =>
          setTimeout(resolve, Number.parseInt(response.headers.get('Retry-After')!))
        );
        const res = await getReadwiseExportsSince(apiKey, updatedAfter);
        if (res.success) {
          return { success: true, data: fullData.concat(res.data) };
        } else {
          return res;
        }
      } else {
        return { success: false, error: response.statusText };
      }
    }
    const responseJson = await response.json();
    fullData.push(...responseJson['results']);
    nextPageCursor = responseJson['nextPageCursor'];
    if (!nextPageCursor) {
      break;
    }
  }
  return { success: true, data: fullData };
};
