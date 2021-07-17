import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-travels',
  templateUrl: './travels.component.html',
  styleUrls: ['./travels.component.scss']
})
export class TravelsComponent implements OnInit {
 offers : Array <any> = [
   {
     id: 1,
     img : "../../assets/zanzibar01.jpg",
     destination : "Zanzibar",
     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed porttitor nibh. Morbi sem ex, consequat vel erat nec, tincidunt laoreet ipsum. Duis varius dolor ac velit faucibus euismod. Quisque vehicula odio mauris, vitae auctor urna posuere sed. Duis quis eros non lorem consectetur tempor ut lobortis orci. Curabitur bibendum, ante sit amet feugiat malesuada, eros metus sollicitudin ex, nec tempus arcu est vel velit. Donec ornare ligula nunc, eu ultricies ex facilisis ut. Nunc ultricies eu magna ac auctor. In sit amet orci sit amet ex sollicitudin elementum. Aenean cursus magna ac eleifend eleifend. Praesent porta est a eros cursus, non congue erat congue.",
     startdate: "15.09.2021",
     duration: "6 nights",
     price: 200.99
   },
   {
    id: 2,
    img : "../../assets/dominican02.jpg",
    destination : "Dominican Republic",
    description: "Etiam in diam ultricies, malesuada turpis eget, rhoncus lectus. Mauris fringilla in leo eu pharetra. Vivamus pulvinar, turpis in elementum facilisis, ante neque commodo augue, sed malesuada tellus odio vel dolor. Donec rhoncus, diam at posuere imperdiet, lectus massa molestie elit, vitae aliquet magna nunc finibus augue. Aliquam sodales in lorem sed iaculis. Nunc laoreet sem nisi, nec consectetur turpis accumsan sit amet. Fusce eget lobortis arcu, ac hendrerit libero. Mauris placerat eleifend augue, ut tristique libero. Proin non metus dignissim, convallis odio a, luctus augue. Donec molestie maximus dapibus. Donec at quam massa. Curabitur ullamcorper purus finibus dolor tempus viverra.",
    startdate: "15.09.2021",
    duration: "4 nights",
    price: 1570.99
  },  
  {
    id: 3,
    img : "../../assets/mauritius01.jpg",
    destination : "Mauritius",
    description: "Suspendisse vitae pulvinar purus, id placerat lacus. Donec metus tortor, rhoncus quis lobortis vel, aliquam vehicula leo. Nulla faucibus justo ut urna iaculis, sed commodo est tempus. Vestibulum luctus facilisis ex, at suscipit eros eleifend ac. Donec et justo euismod, elementum magna id, luctus orci. Sed efficitur metus interdum dolor aliquet sollicitudin. In hac habitasse platea dictumst. Curabitur ut mauris id nulla iaculis placerat et ullamcorper arcu. Phasellus mollis interdum nisi. Morbi at maximus tellus, at varius diam. Fusce sapien ipsum, pharetra a aliquam eget, porta at arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed suscipit, sem in elementum congue, orci enim congue nisl, a condimentum mi purus commodo elit. Nam ac dui ipsum. Curabitur accumsan lacus sit amet erat faucibus, vel semper ligula facilisis.",
    startdate: "15.09.2021",
    duration: "9 nights",
    price: 500.99
  }
 ];
  constructor(private cartService: CartService) { }
  addToCart(offer : any) {
    window.alert('Your destination has been added to the cart!');
    this.cartService.addDestination(offer);
    document.getElementById("sum")!.scrollIntoView(); 
  }
  ngOnInit(): void {
  }

}
