import {Request, Response} from "express";
import { Service } from "./Service";

export abstract class Controller{
    protected abstract service:Service;
    static async getStudents(req: Request, res: Response) {
        const students = await Service.getStudents();
        res.json(students);
    }
    
    static async getSeats(req: Request, res: Response) {
        const seats = await Service.getSeats();
        res.json(seats);
    }
    
    static async getTimeslots(req: Request, res: Response) {
        const timeslots = await Service.getTimeslots();
        res.json(timeslots);
    }
    
    static async getReservations(req: Request, res: Response) {
        const reservations = await Service.getReservations();
        res.json(reservations);
    }
}