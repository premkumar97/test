function FindProxyForURL(url, host) {
    // ----------
    // for STG2
    // ----------

    // raxy site
    if (host == "raxy.rakuten.co.jp") return "PROXY stg-proxy.gecp.rakuten.co.jp:9519";

    // raxy site login
    if (host == "grp02.id.rakuten.co.jp" || host == "login.account.rakuten.com" || host == "member.id.rakuten.co.jp") return "PROXY stg-proxy.gecp.rakuten.co.jp:9519"
    
    // concrete5 admin
    if (host == "article.raxy.rakuten.co.jp") return "PROXY stg-proxy.gecp.rakuten.co.jp:9518";

    // concrete5 public internal 
    if (host == "article-raxy-cms.prod.jp.local") return "PROXY stb-dev-proxy.db.rakuten.co.jp:9502";
    
    // suzaku login
    if (host == "collabo.rakuten.co.jp" ) return "PROXY stb-dev-proxy.db.rakuten.co.jp:9504";

    // management tool
    if (host == "tool.internal.subscription.stg.jp.local" ) return "PROXY stg.checkproxy.rakuten-it.com:9504";

    return "DIRECT";
}
