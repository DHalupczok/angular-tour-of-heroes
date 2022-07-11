import { Component, OnInit, ViewChild } from "@angular/core";
import { ChartType, ChartTypeRegistry } from "chart.js";
import { BaseChartDirective } from "ng2-charts";

@Component({
  selector: "app-my-first-chart",
  templateUrl: "./my-first-chart.component.html",
  styleUrls: ["./my-first-chart.component.scss"],
})
export class MyFirstChartComponent implements OnInit {

  public chartType: ChartType = "bar";
  public data = {
    labels: ["Non important thinks", "Important thinks", "SUPER Important thinks"],
    datasets: [{
      label: "# of thinks",
      data: [100, 100, 100],
      backgroundColor: [
        "#66ff33",
        "#0066ff",
        "#660066",
      ],
      borderColor: [
        "#FFFFFF",
      ],
      borderWidth: 10,
    }],
  };
  public options = {
    scales: {
      y: {
        beginAtZero: false,
      },
    },
  };

  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  constructor() {
  }

  ngOnInit(): void {
  }

  OnAddNonImportantThings() {
    this.data.datasets[0].data[0] += 10;
    this.chart?.update();
  }

  OnRemoveNonImportantThings() {
    this.data.datasets[0].data[0] -= 10;
    this.chart?.update();
  }

  OnAddImportantThings() {
    this.data.datasets[0].data[1] += 10;
    this.chart?.update();
  }

  OnRemoveImportantThings() {
    this.data.datasets[0].data[1] -= 10;
    this.chart?.update();
  }

  OnAddSuperImportantThings() {
    this.data.datasets[0].data[2] += 10;
    this.chart?.update();
  }

  OnRemoveSuperImportantThings() {
    this.data.datasets[0].data[2] -= 10;
    this.chart?.update();
  }

}
