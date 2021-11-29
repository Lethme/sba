import { EventEmitter, Injectable, OnInit } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { HtmlLink, links, LinkType } from "./app-routing.module";

@Injectable()
export class RoutingManager implements OnInit {
    active: number = 0;
    activeChange = new EventEmitter<number>();
    public get activeLink(): number { return this.active }
    public set activeLink(al: number) {
        let link = this.htmlLink(al);
        if (link === undefined) return;
        this.active = al;
        this.router.navigate([link.route]);
    }
    public get activeLinkChange(): EventEmitter<number> { return this.activeChange }

    public get htmlLinks(): Array<HtmlLink> {
        return links.filter(link => {
            return link.type !== LinkType.RouterLink;
        }).map((link, index) => {
            return { route: link.route, text: link.text, active: this.active === index }
        });
    }

    public htmlLink(index: number): HtmlLink | undefined {
        let appLinks = links.filter((link) => {
            return link.type !== LinkType.RouterLink;
        });

        if (index < 0 || index >= appLinks.length) return undefined;

        return {
            route: appLinks[index].route,
            text: appLinks[index].text,
            active: this.active === index
        }
    }

    constructor(private router: Router) {
        this.router.events.subscribe(
            (event: any) => {
                if (event instanceof NavigationEnd) {
                    this.active = this.htmlLinks.findIndex(link => {
                        return link.route === this.router.url.replace('/', '');
                    });
                    this.activeChange.emit(this.active);
                }
            }
        );
    }

    ngOnInit(): void { }
}