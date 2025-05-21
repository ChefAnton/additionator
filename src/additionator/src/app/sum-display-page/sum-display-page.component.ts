import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sum-display-page',
  standalone: true,
  imports: [], // No special imports needed for this simple template
  templateUrl: './sum-display-page.component.html',
  styleUrls: ['./sum-display-page.component.css']
})
export class SumDisplayPageComponent implements OnInit, OnDestroy {
  private route = inject(ActivatedRoute);
  sum: number | string = '...';
  private routeSub: Subscription | undefined;

  ngOnInit(): void {
    this.routeSub = this.route.queryParams.subscribe(params => {
      const val1String = params['val1'];
      const val2String = params['val2'];

      if (val1String !== undefined && val2String !== undefined) {
        const val1 = parseInt(val1String, 10);
        const val2 = parseInt(val2String, 10);

        if (!isNaN(val1) && !isNaN(val2)) {
          this.sum = val1 + val2;
        } else {
          this.sum = 'Error: Invalid numbers provided.';
        }
      } else {
        this.sum = 'Error: Numbers not provided.';
      }
    });
  }

  ngOnDestroy(): void {
    if (this.routeSub) {
      this.routeSub.unsubscribe();
    }
  }
}