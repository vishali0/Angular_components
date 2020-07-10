import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-days',
  templateUrl: './days.component.html',
  styleUrls: ['./days.component.css']
})
export class DaysComponent implements OnInit {
  days = []
  topics = []
  Description = []
  closeResult = ""
  result = "saved click"
  modelRef = ""

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  // addDays() {
  //   let counter = 0;
  //   if (this.days.length == 0)
  //     counter = 0;
  //   else
  //     counter = this.days[this.days.length - 1];
  //   this.days.push(++counter);

  // }
  // addTopics() {
  //   let counter = 0;
  //   if (this.topics.length == 0)
  //     counter = 0;
  //   else
  //     counter = this.topics[this.topics.length - 1];
  //   this.topics.push(++counter);

  // }
  // addDescription() {
  //   let counter = 0;
  //   if (this.Description.length == 0)
  //     counter = 0;
  //   else
  //     counter = this.Description[this.Description.length - 1];
  //   this.Description.push(++counter);

  // }
  addDay() {
    this.days.push({
      id: this.days.length + 1,
      name: `Day ${this.days.length + 1}`,
      topics: [
        {
          topicName: "",
          content: ""
        }
      ]
    })
  }

  addTopics() {
    this.topics.push({
      id: this.topics.length + 1,
      name: `Topic ${this.topics.length + 1}`
    })
  }

  addDescription() {
    this.Description.push({
      id: this.Description.length + 1,
      name: `Description ${this.Description.length + 1}`
    })

  }

  openTopic(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    });
    this.modelRef.result.then(
      (result) => {
        console.log(result)
        this.closeResult = result;
      },
      (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      }
    );
  }
  close() {
    this.modelRef.close({ message: this.description });
  }

}
