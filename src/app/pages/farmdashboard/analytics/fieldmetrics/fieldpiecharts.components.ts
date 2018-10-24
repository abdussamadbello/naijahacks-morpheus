import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'ngx-echarts-pie',
  template: `
    <div echarts [options]="options" class="echart"></div>
  `,
})
export class FieldpiechartsComponent implements AfterViewInit, OnDestroy {
options: any = {};
themeSubscription: any;

constructor(private theme: NbThemeService) {
}

ngOnInit() {
}

ngAfterViewInit() {
  this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

    const colors = config.variables;
    const echarts: any = config.variables.echarts;

    this.options = {
      backgroundColor: echarts.bg,
      color: [colors.warningLight, colors.infoLight, colors.dangerLight, colors.successLight, colors.primaryLight],
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)',
      },
      legend: {
        orient: 'vertical',
        left: 'left',
        data: ['Tomato field', 'Yam field', 'Rice Field', 'Beans Field', 'Sugarcane Field'],
        textStyle: {
          color: echarts.textColor,
        },
      },
      series: [
        {
          name: 'Fields',
          type: 'pie',
          radius: '80%',
          center: ['50%', '50%'],
          data: [
            { value: 335, name: 'Tomato field' },
            { value: 310, name: 'Yam field' },
            { value: 234, name: 'Rice Field' },
            { value: 135, name: 'Beans Field' },
            { value: 1548, name: 'Sugarcane Field' },
          ],
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: echarts.itemHoverShadowColor,
            },
          },
          label: {
            normal: {
              textStyle: {
                color: echarts.textColor,
              },
            },
          },
          labelLine: {
            normal: {
              lineStyle: {
                color: echarts.axisLineColor,
              },
            },
          },
        },
      ],
    };
  });
}

ngOnDestroy(): void {
  this.themeSubscription.unsubscribe();
}
}

