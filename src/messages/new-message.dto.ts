import { ApiProperty } from "@nestjs/swagger";

export class MessageDto {
    @ApiProperty({ example: "Any message" })
    public readonly message: string;
}