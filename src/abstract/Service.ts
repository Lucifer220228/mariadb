import {Request, Response} from "express";
import pool from '../utils/Mariadb';

export abstract class Service{
    static async getStudents() {
        let conn;
        try {
            conn = await pool.getConnection();
            return await conn.query("SELECT * FROM Students");
        } finally {
            if (conn) conn.release();
        }
    }
    
    static async getSeats() {
        let conn;
        try {
            conn = await pool.getConnection();
            return await conn.query("SELECT * FROM Seats");
        } finally {
            if (conn) conn.release();
        }
    }
    
    static async getTimeslots() {
        let conn;
        try {
            conn = await pool.getConnection();
            return await conn.query("SELECT * FROM Timeslots");
        } finally {
            if (conn) conn.release();
        }
    }
    
    static async getReservations() {
        let conn;
        try {
            conn = await pool.getConnection();
            return await conn.query(`
                SELECT r.reservation_id, s.student_name, se.row_label, se.seat_number, t.start_time, t.end_time
                FROM Reservations r
                JOIN Students s ON r.student_id = s.student_id
                JOIN Seats se ON r.seat_id = se.seat_id
                JOIN Timeslots t ON r.timeslot_id = t.timeslot_id
            `);
        } finally {
            if (conn) conn.release();
        }
    }
}