'use server'
import { connectToDtabase as connectToDatabase } from '@/lib/database'
import { handleError } from '@/lib/utils'
import Category from '@/lib/database/models/category.model';
import { CreateCategoryParams,  } from '@/types'

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
