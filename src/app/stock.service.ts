import { HttpClient, HttpHeaders } from '@angular/common/http';
constructor(
  private http: HttpClient,
  private messageService: MessageService) { }
  /** Log a HeroService message with the MessageService */
  private log(message: string) {
  this.messageService.add(`HeroService: ${message}`);
}
  private stocksUrl = 'api/heroes';
)
