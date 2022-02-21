import { prisma } from "../../../../database/prismaClient";

import { hash } from "bcrypt"

interface ICreateClient {
  username: string;
  password: string
}

/*
 [x] Validar se o client existe
 [x] Criptografar a senha
 [x] Salvar o client
*/

export class CreateClientUseCase {
  async execute({ username, password }: ICreateClient) {
    const clientExist = await prisma.clients.findFirst({
      where: {
        username: {
          mode: "insensitive"
        }
      }
    })

    if (clientExist) {
      throw new Error("Client already exists!")
    }

    const hashPassword = await hash(password, 10)

    const client = await prisma.clients.create({
      data: {
        username,
        password: hashPassword
      }
    })

    return client
  }
}
