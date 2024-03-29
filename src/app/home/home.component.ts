import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loggedIn: boolean=false;
  
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    
  }

  onLoadServers(){
     this.router.navigate(['/servers']);
  }

  onLoadServer(id: number){
    this.router.navigate(['/servers', id, 'edit'], {queryParams: {allowEdit: '1'}, fragment: "loading"})
  }

  onLogin(){
    this.authService.login()
    alert("Servers access granted!");
  }

  onLogout(){
    this.authService.logout();
    alert("Denied servers access!");
  }

}
