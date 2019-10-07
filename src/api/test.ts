import { NowRequest, NowResponse } from '@now/node';

export default function (req: NowRequest, res: NowResponse) {
  res.send('Test is OK'!);
}
