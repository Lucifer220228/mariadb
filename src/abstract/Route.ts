import { Router } from "express"
import { Controller } from "./Controller"

export abstract class Route{

    protected abstract url:string

    protected abstract Contorller:Controller

    protected router = Router()

    protected abstract setRoutes(): void

    public getRouter(){
        return this.router
    }

    public getUrl(){
        return this.url
    }
}

const router = express.Router();

router.get('/students', Controller.getStudents);
router.get('/seats', Controller.getSeats);
router.get('/timeslots', Controller.getTimeslots);
router.get('/reservations',Controller.getReservations);

export default router;
