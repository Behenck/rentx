import { container } from 'tsyringe';
import { Request, Response } from 'express';
import { DevolutionRentalsUseCase } from './DevolutionRentalUseCase';

class DevolutionRentalController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id: user_id } = request.user;
        const { id } = request.params;

        const devolutionRentalUseCase = container.resolve(DevolutionRentalsUseCase);

        const rental = await devolutionRentalUseCase.execute({
            id,
            user_id
        });

        return response.status(200).json(rental);
    }
}

export { DevolutionRentalController }