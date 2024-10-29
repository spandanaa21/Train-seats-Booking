import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  numSeats: number = 1;
  seats: boolean[][] = this.initializeSeats();
  selectedSeats: number[] = [];

  initializeSeats(): boolean[][] {
    const coach = [];
    for (let i = 0; i < 11; i++) {
      // 11 rows with 7 seats each
      coach.push(new Array(7).fill(false));
    }
    coach.push(new Array(3).fill(false)); // Last row with 3 seats
    return coach;
  }

  bookSeats(numSeats: number): void {
    this.selectedSeats = [];
    let seatsToBook = numSeats;

    for (let rowIndex = 0; rowIndex < this.seats.length; rowIndex++) {
      const row = this.seats[rowIndex];

      for (let seatIndex = 0; seatIndex < row.length; seatIndex++) {
        if (!row[seatIndex] && seatsToBook > 0) {
          row[seatIndex] = true;
          this.selectedSeats.push(rowIndex * 7 + seatIndex + 1);
          seatsToBook--;
        }

        if (seatsToBook === 0) break;
      }
      if (seatsToBook === 0) break;
    }

    if (seatsToBook > 0) {
      alert('Not enough seats available.');
    }
  }
}
