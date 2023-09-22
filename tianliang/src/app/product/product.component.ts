import { Component, OnInit } from '@angular/core';
import { IProductList, Product } from '../product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  // mainProductList: IProductList<Product> = {
  //   productList:[
  //     {id: 0, name:"stirnf", detail:"hot", photo:"hfdkh.jpg"}
  //   ]
  // }

    productList: Product[] = [
      {
        id: 0,
        name: 'product1',
        detail: 'hot',
        photo: 'https://images.pexels.com/photos/3628508/pexels-photo-3628508.jpeg?auto=compress&cs=tinysrgb&w=600'
      },
      {
        id: 1,
        name: 'product2',
        detail: 'hot',
        photo: 'https://images.pexels.com/photos/269235/pexels-photo-269235.jpeg?auto=compress&cs=tinysrgb&w=600'
      },
      {
        id: 2,
        name: 'product3',
        detail: 'hot',
        photo: 'https://images.pexels.com/photos/3656118/pexels-photo-3656118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      }
    ]
}
