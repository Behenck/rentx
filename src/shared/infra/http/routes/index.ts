import { Router } from 'express';
import { authenticateRoutes } from './authenticate.routes';
import { carsRoutes } from './cars.routes';
import { categoriesRouters } from './categories.routes';
import { rentalRoutes } from './rental.routes';
import { specificationsRouters } from './specifications.routes';
import { usersRouters } from './users.routes';

const router = Router();

router.use("/categories", categoriesRouters);
router.use("/specifications", specificationsRouters);
router.use("/users", usersRouters);
router.use("/cars", carsRoutes);
router.use("/rentals", rentalRoutes);
router.use(authenticateRoutes);

export { router }