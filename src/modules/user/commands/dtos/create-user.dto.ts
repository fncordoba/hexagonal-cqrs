import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'El nombre no puede estar vacío.' })
  name: string;

  @IsEmail({}, { message: 'El email debe ser válido.' })
  email: string;
}
