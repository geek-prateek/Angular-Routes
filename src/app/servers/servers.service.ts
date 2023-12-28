import { Injectable } from "@angular/core";
import { retry } from "rxjs";

@Injectable()
export class ServersService{
    private servers = [
        {
          id: 1,
          name: "Productionserver",
          status: "offline",
        },
        {
          id: 2,
          name: "Testserver",
          status: "offline"
        },
        {
          id: 3,
          name: "Devserver",
          status: "online"
        }
    ]

    getServers(){
        return this.servers;
    }

    getServer(id: number): any{
      const server = this.servers.find(
        (s) => {
          return s.id === id;
        }
      );
      return server;
    }

    updateServer(id: number, serverInfo: {name: string, status: string}){
      const server = this.servers.find((s)=>{
        return s.id === id;
      });
      if(server){
        server.name = serverInfo.name;
        server.status = serverInfo.status;
      }
      
    }
} 