import { ProcessService } from './../process.service';
import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import * as topojson from 'topojson';
import { ProcessLocation } from './location';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {
  locations: ProcessLocation[];

  constructor(private processService: ProcessService) { }

  ngOnInit() {
    this.processService.getLocations()
    .subscribe(locations => {
      this.locations = locations;

      const width = 960,
      height = 500;

      const projection = d3.geoMercator()
        .center([10, 51])
        .scale(800)
        // .rotate([0, 0])
        ;
      // console.log(d3.select('map'));
      const svg = d3.select('map').append('svg')
              .attr('width', width)
              .attr('height', height);

      const path = d3.geoPath()
        .projection(projection);

      const g = svg.append('g');

      d3.json('../../assets/world-110m2.json', function(error, topology) {
      d3.json('../../assets/world-110m2.json').then(function (topology) {
        // if (error) {
        //   throw error;
        // }

        g.selectAll('path')
          .data(topojson.feature(topology, topology.objects.countries).features)
          .data(topojson.feature(topology, (topology as any).objects.countries).features)
          .enter()
            .append('path')
            .attr('d', path);

        g.selectAll('circle')
          .data(locations)
          .enter()
          .append('circle')
          .attr('cx', function(d) {
            return projection([d['geoCoords (optional)'].lng, d['geoCoords (optional)'].lat])[0];
          })
          .attr('cy', function(d) {
            return projection([d['geoCoords (optional)'].lng, d['geoCoords (optional)'].lat])[1];
          })
          .attr('r', 5)
          .style('fill', 'red');
      });

      // const zoom = d3.zoom()
      //   .on('zoom', function() {
      //     svg.attr('transform', d3.event.transform);
      //     // g.attr('transform',
      //     //   'translate(' + d3.event.translate.join(',') +
      //     //   ')scale(' + d3.event.scale + ')');
      //     g.selectAll('path')
      //       .attr('d', path.projection(projection));
      // });

      // svg.call(zoom);
    });
  }
}
