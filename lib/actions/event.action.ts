"use server"
import { CreateEventParams } from "@/types"
import { handleError } from "../utils"
import { connectToDtabase } from "../database"
import User from "../database/models/user.model"
import Event from "../database/models/event.model"

export const createEvent = async ({event, userId, path}:
    CreateEventParams) =>{
        try {
            await connectToDtabase();
            const organizer = await User.findById(userId)

    if(!organizer) throw new Error('Organizer not found')
   console.log("User Id",organizer)
    const newEvent = await Event.create({ ...event, category: event.categoryId, organizer: userId })

    return JSON.parse(JSON.stringify(newEvent))
            
        } catch (error) {
            console.log(error);
            handleError(error);
            
        }

    }
    

