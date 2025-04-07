import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-ai',
  templateUrl: './ai.component.html',
  styleUrls: ['./ai.component.css']
})
export class AiComponent {
  searchQuery = '';
  response = '';
  currentQuery = '';
  isLoading = false;
  errorMessage = '';

  constructor(private http: HttpClient) {}

  search() {
    if (!this.searchQuery.trim()) return;

    this.isLoading = true;
    this.errorMessage = '';
    this.currentQuery = this.searchQuery;
    const encodedQuery = encodeURIComponent(this.searchQuery);

    this.http.get<string>(
      `http://localhost:8091/ai/tunisia/query/${encodedQuery}`,
      { responseType: 'text' as 'json' }
    ).subscribe({
      next: (response) => {
        this.response = response;
        this.isLoading = false;
      },
      error: (error) => {
        this.errorMessage = 'Error fetching results: ' + error.message;
        this.isLoading = false;
      }
    });

    this.searchQuery = '';
  }

  formatResponse(text: string): string {
    // Convert newlines to <br> tags and bold **text**
    return text
      .replace(/\n/g, '<br>')
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  }
}