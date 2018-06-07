import { Component } from "@angular/core";
import { Quote } from "./quote";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "quotes";
  quotes: Quote[] = [
    {
      quote:
        "Always code as if the guy who ends up maintaining your code<br /> will be a violent psychopath<br /> who knows where you live",
      author: "Martin Golding"
    },
    { quote: "There’s no test like production", author: "Unknown" },
    {
      quote:
        "I love deadlines. <br />I like the whooshing sound they make as they fly by",
      author: "Douglas Adams"
    },
    {
      quote:
        "Without requirements or design,<br /> programming is the art of adding bugs to an empty text file",
      author: "Louis Srygley"
    },
    {
      quote:
        "Walking on water and developing software<br /> from a specification are easy of both are frozen",
      author: "Edward V Berard"
    },
    {
      quote: "Linux is only free if your time has no value",
      author: "Jamie Zawinski"
    },
    {
      quote:
        "The best thing about a boolean<br /> is even if you are wrong,<br /> you are only off by a bit.",
      author: "Unknown"
    },
    {
      quote:
        "The greatest performance improvement of all<br /> is when a system goes from <br />not-working to working.",
      author: "John Ousterhout"
    }
  ];
}
