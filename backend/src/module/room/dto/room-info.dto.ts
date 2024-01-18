import { Message } from '@just-chat/types'
import { IsNotEmpty, IsNumber, IsString } from 'class-validator'

export class RoomInfoDto {
  @IsString()
  @IsNotEmpty()
  roomId: string

  @IsString()
  @IsNotEmpty()
  title: string

  members: Member[]

  messages: Message[]

  @IsNumber()
  @IsNotEmpty()
  recentMsgSeq: number

  recentUserRead: { [userId: string]: number }
}

export class Member {
  @IsString()
  @IsNotEmpty()
  userId: string

  @IsString()
  @IsNotEmpty()
  username: string
}
