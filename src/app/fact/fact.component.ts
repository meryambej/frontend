import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { OnInit } from '@angular/core';
  
@Component({
  selector: 'app-fact',
  templateUrl: './fact.component.html',
  styleUrls: ['./fact.component.css']
})


export class FactComponent implements OnInit {
  fact: string | null = null;
  isLoading = false;
  errorMessage = '';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getRandomFact();
  }

  getRandomFact() {
    this.isLoading = true;
    this.errorMessage = '';
    
    this.http.get<string>('http://localhost:8091/fact/random', { responseType: 'text' as 'json' })
      .subscribe({
        next: (response) => {
          this.fact = response;
          this.isLoading = false;
        },
        error: (err) => {
          this.errorMessage = 'Failed to load fact. Please try again later.';
          this.isLoading = false;
          console.error('Error fetching fact:', err);
        }
      });
  }
}