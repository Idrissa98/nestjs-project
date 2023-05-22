import { IsNotEmpty, Length } from "class-validator";

export class CreateQuizDTO {
    @IsNotEmpty({ message : 'The quiz should have a title' })
    @Length(5, 255)
     title: string;

    @IsNotEmpty({ message : 'The quiz should have a description' })
    @Length(5)
     description: string;
}