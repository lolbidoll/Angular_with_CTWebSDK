import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import clevertap from 'clevertap-web-sdk';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';

  ProductPurchase(): void {
    console.log("Purchase clicked");
    if (typeof window !== 'undefined' && window.clevertap) {
      window.clevertap.event.push("Product Viewed");
    } else {
      console.error("CleverTap is not initialized or window is not available.");
    }
  }

  AddToCart(): void {
    console.log("Add To Cart");
    if (typeof window !== 'undefined' && window.clevertap) {
      window.clevertap.event.push("Product Viewed");
    } else {
      console.error("CleverTap is not initialized or window is not available.");
    }
  }

  Checkout(): void {
    console.log("Checkout");
    if (typeof window !== 'undefined' && window.clevertap) {
      window.clevertap.event.push("Product Viewed");
    } else {
      console.error("CleverTap is not initialized or window is not available.");
    }
  }
  
}
