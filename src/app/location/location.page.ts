
import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';



declare var google:any;

@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
})
export class LocationPage implements OnInit {
  iconImage:any='assets/icon/borribo-map.png';
  map: any;

  @ViewChild('map', {read: ElementRef, static: false}) mapRef: ElementRef;

  infoWindows: any = [];

  markers: any = [
    {
      title: "Borribo Microfinance Institution Plc (Head Office)",
      latitude: "11.520003696808981",
      longitude: "104.90924561557142",
    },
    {
      title: "Borribo Microfinance Institution Plc (Duan Penh Branch)",
      latitude: "11.573345448848032",
      longitude: "104.9251687617076",
    },
    {
      title: "Borribo Microfinance Institution Plc (Ta Khmau Branch)",
      latitude: "11.483176117238719",
      longitude: "104.94377809442535",
    },
    {
      title: "Borribo Microfinance Institution Plc (Kien Svay Branch)",
      latitude: "11.511169661032083",
      longitude: "105.05054151605474",
    },

    
  ];

  

 

  ionViewDidEnter() {
    this.showMap();
  }

  addMarkersToMap(markers){
    for (let marker of markers) {
      let position = new google.maps.LatLng(marker.latitude, marker.longitude);
      let mapMarker = new google.maps.Marker({
        position: position,
        title: marker.title,
        icon: this.iconImage,
        latitude: marker.latitude,
        longitude: marker.longitude
      });
      mapMarker.setMap(this.map);

      this.addInfoWindowToMarker(mapMarker);

     
    }
  }

  addInfoWindowToMarker(marker){
    let infoWindowContent = '<div id="content">'+
                              '<h2 id="firstHeading" class"firstHeading">' + marker.title + '</h2>' +
                              '<p> Latitude: ' + marker.latitude + '</p>' + 
                              '<p> Longitude: ' + marker.longitude + '</p>' +
                              '<ion-button id="navigate">Navigate</ion-button>'+
                              '</div>';
    let infoWindow = new google.maps.InfoWindow({
      content: infoWindowContent
    });

    

    marker.addListener('click', () => {
      this.closeAllInfoWindows();
      icon: this.iconImage;
      infoWindow.open(this.map,marker);
    });
   

    google.maps.event.addListenerOnce(infoWindow, 'domready', () => {
      document.getElementById('navigate').addEventListener('click', () => {
        console.log('navigate button clicked');
        // code to navigate using google maps app
        window.open('https://www.google.com/maps/dir/?api=1&destination=' + marker.latitude +','+ marker.longitude);
      });
      
    });
     this.infoWindows.push(infoWindow);
  }

  closeAllInfoWindows (){
    for(let window of this.infoWindows){
      window.close();
    }
  }

  showMap() {
    const location = new google.maps.LatLng(11.523590773605696, 104.92616565874246);
    
    const options = {
        center: location,
        zoom: 10,
        disableDefaultUI: true,
        
      }
    
      
      this.map = new google.maps.Map(this.mapRef.nativeElement, options);
    this.addMarkersToMap(this.markers);
  }

  ngOnInit() {
  }

}
