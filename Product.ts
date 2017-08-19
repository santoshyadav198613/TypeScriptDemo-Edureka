import { IProductDetails } from './ProductDetails';
import { getProdct, editDetails } from './prouctFunction';

class Product {
    id: number;
    name: string;
    price: number;
    details: IProductDetails;

    add() {
        getProdct();
    }
}