'use server'

import { revalidatePath } from 'next/cache'

import { connectToDtabase as connectToDatabase } from '@/lib/database'
import User from '@/lib/database/models/user.model'
import Order from '@/lib/database/models/order.model'
import Event from '@/lib/database/models/event.model'
import { handleError } from '@/lib/utils'
import Category from '@/lib/database/models/category.model';

import { CreateCategoryParams, CreateUserParams, UpdateUserParams } from '@/types'

export const createCategory = async ({ categoryName }: { categoryName: string }) : Promise<CreateCategoryParams> => {

    try{
        await connectToDatabase();
        const newCategory = await Category.create({name: categoryName});
        return JSON.parse(JSON.stringify(newCategory));
    }catch (error){
        handleError(error);
        throw error;
    }
}
export const getAllCategories = async() =>
{

    try{
        await connectToDatabase();
        const categories = await Category.find();
        return JSON.parse(JSON.stringify(categories));
    }catch (error){
        handleError(error);
        throw error;
    }
}
