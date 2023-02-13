function FindProxyForURL(url, host) {
    // ----------
    // for DEV
    // ----------

    // raxy site
    if (host == "raxy.rakuten.co.jp") return "PROXY stg.checkproxy.rakuten-it.com:9501";

    // raxy site login
    //if (host == "grp02.id.rakuten.co.jp") return "PROXY stg.checkproxy.rakuten-it.com:9501"
    //if (host == "grp02.id.rakuten.co.jp") return "PROXY stg.checkproxy.rakuten-it.com:9501"
// raxy site login
    if (host == "grp02.id.rakuten.co.jp") return "PROXY stg-proxy.gecp.rakuten.co.jp:9519"

    // concrete5 admin
    if (host == "article.raxy.rakuten.co.jp") return "PROXY stg.checkproxy.rakuten-it.com:9518";

    // concrete5 public internal 
    if (host == "article-raxy-cms.prod.jp.local") return "PROXY stg.checkproxy.rakuten-it.com:9502";
    
    // suzaku login
    if (host == "collabo.rakuten.co.jp" ) return "PROXY stg.checkproxy.rakuten-it.com:9502";

    // management tool
    if (host == "tool2.collabo.rakuten.co.jp" ) return "PROXY stg.checkproxy.rakuten-it.com:9501";

    // internal vip
    if (host == "tool.internal.subscription.dev.jp.local" ) return "PROXY stg.checkproxy.rakuten-it.com:9501";


    
    //if (url == https://raxy.rakuten.co.jp/assets/logo/logo_raxy_sp.svg?v=201807020000) return "PROXY stg.checkproxy.rakuten-it.com:9501";
    return "DIRECT";
}
