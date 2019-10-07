import { NowRequest, NowResponse } from '@now/node';

export default function (_: NowRequest, res: NowResponse) {
  res.send('Test is OK'!);
}
