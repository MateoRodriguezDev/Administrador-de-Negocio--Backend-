import { Catch, ExceptionFilter, ArgumentsHost, NotFoundException, ConflictException, InternalServerErrorException } from "@nestjs/common";
import { Prisma } from "@prisma/client";

@Catch(Prisma.PrismaClientKnownRequestError)
export class PrismaExceptionFilter implements ExceptionFilter {
    catch(exception: Prisma.PrismaClientKnownRequestError, host: ArgumentsHost) {
        switch (exception.code) {
            case "P2002":
                throw new ConflictException("Ya existe un registro con ese valor único");
            case "P2003":
            case "P2025":
                throw new NotFoundException("Registro relacionado no encontrado");
            default:
                throw new InternalServerErrorException("Error interno del servidor");
        }
    }
}