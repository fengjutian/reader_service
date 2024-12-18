import { ApiProperty } from '@nestjs/swagger';

export class ResponseDto<T> {
  @ApiProperty({ description: '请求是否成功' })
  success: boolean;

  @ApiProperty({ description: '返回数据' })
  data: T;

  @ApiProperty({ description: '返回信息' })
  message: string;

  constructor(success: boolean, data: T, message: string) {
    this.success = success;
    this.data = data;
    this.message = message;
  }

  static ok<T>(data?: T, message?: string): ResponseDto<T> {
    return new ResponseDto<T>(true, data, message || '操作成功');
  }

  static fail<T>(data?: T, message?: string): ResponseDto<T> {
    return new ResponseDto<T>(false, data, message || '操作失败');
  }
}
