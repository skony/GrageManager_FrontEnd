



<!DOCTYPE html>
<html lang="en" class=" is-copy-enabled is-u2f-enabled">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>

    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/frameworks-36ca17775aaf860d41122b2071e6e880787a5beb35db9b3994157aebc0a527bf.css" integrity="sha256-NsoXd1qvhg1BEisgcebogHh6W+s125s5lBV668ClJ78=" media="all" rel="stylesheet" />
    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github-4e68832773c118d5af9bdbdf668b7652c3f071362ad1a70119a03aa0f34408bf.css" integrity="sha256-TmiDJ3PBGNWvm9vfZot2UsPwcTYq0acBGaA6oPNECL8=" media="all" rel="stylesheet" />
    
    
    
    

    <link as="script" href="https://assets-cdn.github.com/assets/frameworks-1ffc10688b30831d5f8d09b06e5ea8b731b0dc0ba292c70a826422ae9609179d.js" rel="preload" />
    
    <link as="script" href="https://assets-cdn.github.com/assets/github-04aabd55e82f7dc6ab9be08a58cbb78a5c67c89257e0a996642b96d0349aaa11.js" rel="preload" />

    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    <meta name="viewport" content="width=device-width">
    
    
    <title>knockout.mapping/knockout.mapping-latest.js at master · SteveSanderson/knockout.mapping</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" href="/apple-touch-icon.png">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="/apple-touch-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="/apple-touch-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon-180x180.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="https://avatars0.githubusercontent.com/u/161375?v=3&amp;s=400" name="twitter:image:src" /><meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="SteveSanderson/knockout.mapping" name="twitter:title" /><meta content="knockout.mapping - Object mapping plugin for KnockoutJS" name="twitter:description" />
      <meta content="https://avatars0.githubusercontent.com/u/161375?v=3&amp;s=400" property="og:image" /><meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="SteveSanderson/knockout.mapping" property="og:title" /><meta content="https://github.com/SteveSanderson/knockout.mapping" property="og:url" /><meta content="knockout.mapping - Object mapping plugin for KnockoutJS" property="og:description" />
      <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">
    <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">
    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="web-socket" href="wss://live.github.com/_sockets/MzAyNTA3NzpiMTJlOWRkYzg5Y2QzMjYwYzc0NTczOTM3Mzg1ODJmNzoyOTYwNGZiMjhhNDY3MjgwODQwZTZlOWM5Yjk0MDU5Y2UzMjEzMDk5NGY2ZWVmYzRmMWIxZmJkNGI3ZTYxNTlh--e75f38b6826e860ccc613e8da61f4a56972ec5d4">
    <meta name="pjax-timeout" content="1000">
    <link rel="sudo-modal" href="/sessions/sudo_modal">

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>

    <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
<meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
    <meta name="google-analytics" content="UA-3769691-2">

<meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="4D415084:B56D:1DCF188:5756D37A" name="octolytics-dimension-request_id" /><meta content="3025077" name="octolytics-actor-id" /><meta content="skony" name="octolytics-actor-login" /><meta content="014dda56567649b306d5232ea40546c1d56ecfcd72cde38c146974345a44abab" name="octolytics-actor-hash" />
<meta content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" name="analytics-location" />



  <meta class="js-ga-set" name="dimension1" content="Logged In">



        <meta name="hostname" content="github.com">
    <meta name="user-login" content="skony">

        <meta name="expected-hostname" content="github.com">
      <meta name="js-proxy-site-detection-payload" content="NDkxMWQ5NzViYzVmZmRhMzZlN2YyMzU4NTY0MWM2ZmVlZmUyMmMzMWVkZGJhMzMyZWY1NmQ0MzZjMzI0NDhlY3x7InJlbW90ZV9hZGRyZXNzIjoiNzcuNjUuODAuMTMyIiwicmVxdWVzdF9pZCI6IjRENDE1MDg0OkI1NkQ6MURDRjE4ODo1NzU2RDM3QSIsInRpbWVzdGFtcCI6MTQ2NTMwODAyNn0=">


      <link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#4078c0">
      <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">

    <meta name="html-safe-nonce" content="fd0bc8383335318851c700a2daabca872fd1c4cc">
    <meta content="e7770b2f0a786400fc416b65ccf89db0fb4bbcce" name="form-nonce" />

    <meta http-equiv="x-pjax-version" content="81b809bb66678836bc1647df6eed5301">
    

      
  <meta name="description" content="knockout.mapping - Object mapping plugin for KnockoutJS">
  <meta name="go-import" content="github.com/SteveSanderson/knockout.mapping git https://github.com/SteveSanderson/knockout.mapping.git">

  <meta content="161375" name="octolytics-dimension-user_id" /><meta content="SteveSanderson" name="octolytics-dimension-user_login" /><meta content="1041356" name="octolytics-dimension-repository_id" /><meta content="SteveSanderson/knockout.mapping" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="1041356" name="octolytics-dimension-repository_network_root_id" /><meta content="SteveSanderson/knockout.mapping" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/SteveSanderson/knockout.mapping/commits/master.atom" rel="alternate" title="Recent Commits to knockout.mapping:master" type="application/atom+xml">


      <link rel="canonical" href="https://github.com/SteveSanderson/knockout.mapping/blob/master/build/output/knockout.mapping-latest.js" data-pjax-transient>
  </head>


  <body class="logged-in   env-production linux vis-public page-blob">
    <div id="js-pjax-loader-bar" class="pjax-loader-bar"></div>
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>

    
    
    



        <div class="header header-logged-in true" role="banner">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/" data-hotkey="g d" aria-label="Homepage" data-ga-click="Header, go to dashboard, icon:logo">
  <svg aria-hidden="true" class="octicon octicon-mark-github" height="28" version="1.1" viewBox="0 0 16 16" width="28"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
</a>


        <div class="header-search scoped-search site-scoped-search js-site-search" role="search">
  <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/SteveSanderson/knockout.mapping/search" class="js-site-search-form" data-scoped-search-url="/SteveSanderson/knockout.mapping/search" data-unscoped-search-url="/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <label class="form-control header-search-wrapper js-chromeless-input-container">
      <div class="header-search-scope">This repository</div>
      <input type="text"
        class="form-control header-search-input js-site-search-focus js-site-search-field is-clearable"
        data-hotkey="s"
        name="q"
        placeholder="Search"
        aria-label="Search this repository"
        data-unscoped-placeholder="Search GitHub"
        data-scoped-placeholder="Search"
        tabindex="1"
        autocapitalize="off">
    </label>
</form></div>


      <ul class="header-nav left" role="navigation">
        <li class="header-nav-item">
          <a href="/pulls" class="js-selected-navigation-item header-nav-link" data-ga-click="Header, click, Nav menu - item:pulls context:user" data-hotkey="g p" data-selected-links="/pulls /pulls/assigned /pulls/mentioned /pulls">
            Pull requests
</a>        </li>
        <li class="header-nav-item">
          <a href="/issues" class="js-selected-navigation-item header-nav-link" data-ga-click="Header, click, Nav menu - item:issues context:user" data-hotkey="g i" data-selected-links="/issues /issues/assigned /issues/mentioned /issues">
            Issues
</a>        </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://gist.github.com/" data-ga-click="Header, go to gist, text:gist">Gist</a>
          </li>
      </ul>

    
<ul class="header-nav user-nav right" id="user-links">
  <li class="header-nav-item">
    
    <a href="/notifications" aria-label="You have unread notifications" class="header-nav-link notification-indicator tooltipped tooltipped-s js-socket-channel js-notification-indicator" data-channel="tenant:1:notification-changed:3025077" data-ga-click="Header, go to notifications, icon:unread" data-hotkey="g n">
        <span class="mail-status unread"></span>
        <svg aria-hidden="true" class="octicon octicon-bell" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M14 12v1H0v-1l.73-.58c.77-.77.81-2.55 1.19-4.42C2.69 3.23 6 2 6 2c0-.55.45-1 1-1s1 .45 1 1c0 0 3.39 1.23 4.16 5 .38 1.88.42 3.66 1.19 4.42l.66.58H14zm-7 4c1.11 0 2-.89 2-2H5c0 1.11.89 2 2 2z"></path></svg>
</a>
  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link tooltipped tooltipped-s js-menu-target" href="/new"
       aria-label="Create new…"
       data-ga-click="Header, create new, icon:add">
      <svg aria-hidden="true" class="octicon octicon-plus left" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 9H7v5H5V9H0V7h5V2h2v5h5z"></path></svg>
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      <ul class="dropdown-menu dropdown-menu-sw">
        
<a class="dropdown-item" href="/new" data-ga-click="Header, create new repository">
  New repository
</a>

  <a class="dropdown-item" href="/new/import" data-ga-click="Header, import a repository">
    Import repository
  </a>


  <a class="dropdown-item" href="/organizations/new" data-ga-click="Header, create new organization">
    New organization
  </a>



  <div class="dropdown-divider"></div>
  <div class="dropdown-header">
    <span title="SteveSanderson/knockout.mapping">This repository</span>
  </div>
    <a class="dropdown-item" href="/SteveSanderson/knockout.mapping/issues/new" data-ga-click="Header, create new issue">
      New issue
    </a>

      </ul>
    </div>
  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link name tooltipped tooltipped-sw js-menu-target" href="/skony"
       aria-label="View profile and more"
       data-ga-click="Header, show menu, icon:avatar">
      <img alt="@skony" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/3025077?v=3&amp;s=40" width="20" />
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      <div class="dropdown-menu  dropdown-menu-sw">
        <div class=" dropdown-header header-nav-current-user css-truncate">
            Signed in as <strong class="css-truncate-target">skony</strong>

        </div>


        <div class="dropdown-divider"></div>

          <a class="dropdown-item" href="/skony" data-ga-click="Header, go to profile, text:your profile">
            Your profile
          </a>
        <a class="dropdown-item" href="/stars" data-ga-click="Header, go to starred repos, text:your stars">
          Your stars
        </a>
          <a class="dropdown-item" href="/explore" data-ga-click="Header, go to explore, text:explore">
            Explore
          </a>
          <a class="dropdown-item" href="/integrations" data-ga-click="Header, go to integrations, text:integrations">
            Integrations
          </a>
        <a class="dropdown-item" href="https://help.github.com" data-ga-click="Header, go to help, text:help">
          Help
        </a>


          <div class="dropdown-divider"></div>

          <a class="dropdown-item" href="/settings/profile" data-ga-click="Header, go to settings, icon:settings">
            Settings
          </a>

          <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/logout" class="logout-form" data-form-nonce="e7770b2f0a786400fc416b65ccf89db0fb4bbcce" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="LURX2NpvxSwKG7j8yMJefP8uX8H3d3EHs0buY3AjhM3RXwmfmv6goYPbKpoEcBLdYI5+J4YDe9bJ4z2tekezwA==" /></div>
            <button class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout">
              Sign out
            </button>
</form>
      </div>
    </div>
  </li>
</ul>


    
  </div>
</div>


      


    <div id="start-of-content" class="accessibility-aid"></div>

      <div id="js-flash-container">
</div>


    <div role="main" class="main-content">
        <div itemscope itemtype="http://schema.org/SoftwareSourceCode">
    <div id="js-repo-pjax-container" data-pjax-container>
      
<div class="pagehead repohead instapaper_ignore readability-menu experiment-repo-nav">
  <div class="container repohead-details-container">

    

<ul class="pagehead-actions">

  <li>
        <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-form-nonce="e7770b2f0a786400fc416b65ccf89db0fb4bbcce" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="72FTDU18ecURIBn0NcrLtOdusRQOVVfi+fMlFiqeOqtbHbKvtcrlgiYUdldHQ2YUWBB4HFI7Hab5TiQ3I0th5g==" /></div>      <input class="form-control" id="repository_id" name="repository_id" type="hidden" value="1041356" />

        <div class="select-menu js-menu-container js-select-menu">
          <a href="/SteveSanderson/knockout.mapping/subscription"
            class="btn btn-sm btn-with-count select-menu-button js-menu-target" role="button" tabindex="0" aria-haspopup="true"
            data-ga-click="Repository, click Watch settings, action:blob#show">
            <span class="js-select-button">
              <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"></path></svg>
              Watch
            </span>
          </a>
          <a class="social-count js-social-count" href="/SteveSanderson/knockout.mapping/watchers">
            65
          </a>

        <div class="select-menu-modal-holder">
          <div class="select-menu-modal subscription-menu-modal js-menu-content" aria-hidden="true">
            <div class="select-menu-header js-navigation-enable" tabindex="-1">
              <svg aria-label="Close" class="octicon octicon-x js-menu-close" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"></path></svg>
              <span class="select-menu-title">Notifications</span>
            </div>

              <div class="select-menu-list js-navigation-container" role="menu">

                <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
                  <div class="select-menu-item-text">
                    <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                    <span class="select-menu-item-heading">Not watching</span>
                    <span class="description">Be notified when participating or @mentioned.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"></path></svg>
                      Watch
                    </span>
                  </div>
                </div>

                <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
                  <div class="select-menu-item-text">
                    <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                    <span class="select-menu-item-heading">Watching</span>
                    <span class="description">Be notified of all conversations.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"></path></svg>
                      Unwatch
                    </span>
                  </div>
                </div>

                <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
                  <div class="select-menu-item-text">
                    <input id="do_ignore" name="do" type="radio" value="ignore" />
                    <span class="select-menu-item-heading">Ignoring</span>
                    <span class="description">Never be notified.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-mute" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M8 2.81v10.38c0 .67-.81 1-1.28.53L3 10H1c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h2l3.72-3.72C7.19 1.81 8 2.14 8 2.81zm7.53 3.22l-1.06-1.06-1.97 1.97-1.97-1.97-1.06 1.06L11.44 8 9.47 9.97l1.06 1.06 1.97-1.97 1.97 1.97 1.06-1.06L13.56 8l1.97-1.97z"></path></svg>
                      Stop ignoring
                    </span>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
</form>
  </li>

  <li>
    
  <div class="js-toggler-container js-social-container starring-container ">

    <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/SteveSanderson/knockout.mapping/unstar" class="starred" data-form-nonce="e7770b2f0a786400fc416b65ccf89db0fb4bbcce" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="QOovmqn4srW1iOaKNtyJnvhLZXpKRryQnmpPfkWWiyB/zZQa5LHbkzPNeFzVvntU769iMANYxd9kKQpCzMT8Ow==" /></div>
      <button
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Unstar this repository" title="Unstar SteveSanderson/knockout.mapping"
        data-ga-click="Repository, click unstar button, action:blob#show; text:Unstar">
        <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"></path></svg>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/SteveSanderson/knockout.mapping/stargazers">
          518
        </a>
</form>
    <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/SteveSanderson/knockout.mapping/star" class="unstarred" data-form-nonce="e7770b2f0a786400fc416b65ccf89db0fb4bbcce" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="rFCGxDTwOayPMx7X1v8nFlluVwtvsVHBwsFnG5cc14Bp2AfPnOS8CnXSXBYSZ+2jEiEkyBL13BhbqREbdKMQgQ==" /></div>
      <button
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Star this repository" title="Star SteveSanderson/knockout.mapping"
        data-ga-click="Repository, click star button, action:blob#show; text:Star">
        <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"></path></svg>
        Star
      </button>
        <a class="social-count js-social-count" href="/SteveSanderson/knockout.mapping/stargazers">
          518
        </a>
</form>  </div>

  </li>

  <li>
          <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/SteveSanderson/knockout.mapping/fork" class="btn-with-count" data-form-nonce="e7770b2f0a786400fc416b65ccf89db0fb4bbcce" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="im39OjLFHB8Cxmfqz4QVtuB1xIIpPEHgIWQHytqsfREJgmv8GZFyXUZmdaRVE2n6uAboOIudHOeK/eMTfRRTPg==" /></div>
            <button
                type="submit"
                class="btn btn-sm btn-with-count"
                data-ga-click="Repository, show fork modal, action:blob#show; text:Fork"
                title="Fork your own copy of SteveSanderson/knockout.mapping to your account"
                aria-label="Fork your own copy of SteveSanderson/knockout.mapping to your account">
              <svg aria-hidden="true" class="octicon octicon-repo-forked" height="16" version="1.1" viewBox="0 0 10 16" width="10"><path d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"></path></svg>
              Fork
            </button>
</form>
    <a href="/SteveSanderson/knockout.mapping/network" class="social-count">
      707
    </a>
  </li>
</ul>

    <h1 class="public ">
  <svg aria-hidden="true" class="octicon octicon-repo" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"></path></svg>
  <span class="author" itemprop="author"><a href="/SteveSanderson" class="url fn" rel="author">SteveSanderson</a></span><!--
--><span class="path-divider">/</span><!--
--><strong itemprop="name"><a href="/SteveSanderson/knockout.mapping" data-pjax="#js-repo-pjax-container">knockout.mapping</a></strong>

</h1>

  </div>
  <div class="container">
    
<nav class="reponav js-repo-nav js-sidenav-container-pjax"
     itemscope
     itemtype="http://schema.org/BreadcrumbList"
     role="navigation"
     data-pjax="#js-repo-pjax-container">

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/SteveSanderson/knockout.mapping" aria-selected="true" class="js-selected-navigation-item selected reponav-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /SteveSanderson/knockout.mapping" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-code" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"></path></svg>
      <span itemprop="name">Code</span>
      <meta itemprop="position" content="1">
</a>  </span>

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a href="/SteveSanderson/knockout.mapping/issues" class="js-selected-navigation-item reponav-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /SteveSanderson/knockout.mapping/issues" itemprop="url">
        <svg aria-hidden="true" class="octicon octicon-issue-opened" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"></path></svg>
        <span itemprop="name">Issues</span>
        <span class="counter">62</span>
        <meta itemprop="position" content="2">
</a>    </span>

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/SteveSanderson/knockout.mapping/pulls" class="js-selected-navigation-item reponav-item" data-hotkey="g p" data-selected-links="repo_pulls /SteveSanderson/knockout.mapping/pulls" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-git-pull-request" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 10 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v6.56A1.993 1.993 0 0 0 2 15a1.993 1.993 0 0 0 1-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"></path></svg>
      <span itemprop="name">Pull requests</span>
      <span class="counter">19</span>
      <meta itemprop="position" content="3">
</a>  </span>

    <a href="/SteveSanderson/knockout.mapping/wiki" class="js-selected-navigation-item reponav-item" data-hotkey="g w" data-selected-links="repo_wiki /SteveSanderson/knockout.mapping/wiki">
      <svg aria-hidden="true" class="octicon octicon-book" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M3 5h4v1H3V5zm0 3h4V7H3v1zm0 2h4V9H3v1zm11-5h-4v1h4V5zm0 2h-4v1h4V7zm0 2h-4v1h4V9zm2-6v9c0 .55-.45 1-1 1H9.5l-1 1-1-1H2c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h5.5l1 1 1-1H15c.55 0 1 .45 1 1zm-8 .5L7.5 3H2v9h6V3.5zm7-.5H9.5l-.5.5V12h6V3z"></path></svg>
      Wiki
</a>

  <a href="/SteveSanderson/knockout.mapping/pulse" class="js-selected-navigation-item reponav-item" data-selected-links="pulse /SteveSanderson/knockout.mapping/pulse">
    <svg aria-hidden="true" class="octicon octicon-pulse" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M11.5 8L8.8 5.4 6.6 8.5 5.5 1.6 2.38 8H0v2h3.6l.9-1.8.9 5.4L9 8.5l1.6 1.5H14V8z"></path></svg>
    Pulse
</a>
  <a href="/SteveSanderson/knockout.mapping/graphs" class="js-selected-navigation-item reponav-item" data-selected-links="repo_graphs repo_contributors /SteveSanderson/knockout.mapping/graphs">
    <svg aria-hidden="true" class="octicon octicon-graph" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M16 14v1H0V0h1v14h15zM5 13H3V8h2v5zm4 0H7V3h2v10zm4 0h-2V6h2v7z"></path></svg>
    Graphs
</a>

</nav>

  </div>
</div>

<div class="container new-discussion-timeline experiment-repo-nav">
  <div class="repository-content">

    

<a href="/SteveSanderson/knockout.mapping/blob/92f2649c61bdad2da3406811518f80387a1f6b57/build/output/knockout.mapping-latest.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:0e004891be24797a5f67512419cdac3a -->

<div class="file-navigation js-zeroclipboard-container">
  
<div class="select-menu branch-select-menu js-menu-container js-select-menu left">
  <button class="btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    title="master"
    type="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <i>Branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </button>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <svg aria-label="Close" class="octicon octicon-x js-menu-close" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"></path></svg>
        <span class="select-menu-title">Switch branches/tags</span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="form-control js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab" role="tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab" role="tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches" role="menu">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/SteveSanderson/knockout.mapping/blob/arrayperf/build/output/knockout.mapping-latest.js"
               data-name="arrayperf"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text" title="arrayperf">
                arrayperf
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/SteveSanderson/knockout.mapping/blob/master/build/output/knockout.mapping-latest.js"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text" title="master">
                master
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/SteveSanderson/knockout.mapping/blob/revert/build/output/knockout.mapping-latest.js"
               data-name="revert"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text" title="revert">
                revert
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/SteveSanderson/knockout.mapping/tree/2.4.1/build/output/knockout.mapping-latest.js"
              data-name="2.4.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.4.1">
                2.4.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/SteveSanderson/knockout.mapping/tree/2.4.0/build/output/knockout.mapping-latest.js"
              data-name="2.4.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.4.0">
                2.4.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/SteveSanderson/knockout.mapping/tree/2.3.5/build/output/knockout.mapping-latest.js"
              data-name="2.3.5"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.3.5">
                2.3.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/SteveSanderson/knockout.mapping/tree/2.0.1/build/output/knockout.mapping-latest.js"
              data-name="2.0.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.0.1">
                2.0.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/SteveSanderson/knockout.mapping/tree/2.0/build/output/knockout.mapping-latest.js"
              data-name="2.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.0">
                2.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/SteveSanderson/knockout.mapping/tree/1.2.5/build/output/knockout.mapping-latest.js"
              data-name="1.2.5"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.2.5">
                1.2.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/SteveSanderson/knockout.mapping/tree/1.2.4/build/output/knockout.mapping-latest.js"
              data-name="1.2.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.2.4">
                1.2.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/SteveSanderson/knockout.mapping/tree/1.2.3/build/output/knockout.mapping-latest.js"
              data-name="1.2.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.2.3">
                1.2.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/SteveSanderson/knockout.mapping/tree/1.2.2/build/output/knockout.mapping-latest.js"
              data-name="1.2.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.2.2">
                1.2.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/SteveSanderson/knockout.mapping/tree/1.2.1/build/output/knockout.mapping-latest.js"
              data-name="1.2.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.2.1">
                1.2.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/SteveSanderson/knockout.mapping/tree/1.2/build/output/knockout.mapping-latest.js"
              data-name="1.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.2">
                1.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/SteveSanderson/knockout.mapping/tree/1.0/build/output/knockout.mapping-latest.js"
              data-name="1.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.0">
                1.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/SteveSanderson/knockout.mapping/tree/0.5/build/output/knockout.mapping-latest.js"
              data-name="0.5"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target" title="0.5">
                0.5
              </span>
            </a>
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

  <div class="btn-group right">
    <a href="/SteveSanderson/knockout.mapping/find/master"
          class="js-pjax-capture-input btn btn-sm"
          data-pjax
          data-hotkey="t">
      Find file
    </a>
    <button aria-label="Copy file path to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button">Copy path</button>
  </div>
  <div class="breadcrumb js-zeroclipboard-target">
    <span class="repo-root js-repo-root"><span class="js-path-segment"><a href="/SteveSanderson/knockout.mapping"><span>knockout.mapping</span></a></span></span><span class="separator">/</span><span class="js-path-segment"><a href="/SteveSanderson/knockout.mapping/tree/master/build"><span>build</span></a></span><span class="separator">/</span><span class="js-path-segment"><a href="/SteveSanderson/knockout.mapping/tree/master/build/output"><span>output</span></a></span><span class="separator">/</span><strong class="final-path">knockout.mapping-latest.js</strong>
  </div>
</div>


  <div class="commit-tease">
      <span class="right">
        <a class="commit-tease-sha" href="/SteveSanderson/knockout.mapping/commit/35482d03ee7520b1afe0b437a6e66150369378a7" data-pjax>
          35482d0
        </a>
        <time datetime="2013-02-08T14:18:25Z" is="relative-time">Feb 8, 2013</time>
      </span>
      <div>
        <img alt="@RoyJacobs" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/173822?v=3&amp;s=40" width="20" />
        <a href="/RoyJacobs" class="user-mention" rel="contributor">RoyJacobs</a>
          <a href="/SteveSanderson/knockout.mapping/commit/35482d03ee7520b1afe0b437a6e66150369378a7" class="message" data-pjax="true" title="Bumped version to 2.4.1 and rebuilt">Bumped version to 2.4.1 and rebuilt</a>
      </div>

    <div class="commit-tease-contributors">
      <button type="button" class="btn-link muted-link contributors-toggle" data-facebox="#blob_contributors_box">
        <strong>3</strong>
         contributors
      </button>
          <a class="avatar-link tooltipped tooltipped-s" aria-label="RoyJacobs" href="/SteveSanderson/knockout.mapping/commits/master/build/output/knockout.mapping-latest.js?author=RoyJacobs"><img alt="@RoyJacobs" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/173822?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="SteveSanderson" href="/SteveSanderson/knockout.mapping/commits/master/build/output/knockout.mapping-latest.js?author=SteveSanderson"><img alt="@SteveSanderson" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/161375?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="jpc" href="/SteveSanderson/knockout.mapping/commits/master/build/output/knockout.mapping-latest.js?author=jpc"><img alt="@jpc" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/107984?v=3&amp;s=40" width="20" /> </a>


    </div>

    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header" data-facebox-id="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list" data-facebox-id="facebox-description">
          <li class="facebox-user-list-item">
            <img alt="@RoyJacobs" height="24" src="https://avatars2.githubusercontent.com/u/173822?v=3&amp;s=48" width="24" />
            <a href="/RoyJacobs">RoyJacobs</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@SteveSanderson" height="24" src="https://avatars2.githubusercontent.com/u/161375?v=3&amp;s=48" width="24" />
            <a href="/SteveSanderson">SteveSanderson</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@jpc" height="24" src="https://avatars0.githubusercontent.com/u/107984?v=3&amp;s=48" width="24" />
            <a href="/jpc">jpc</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file">
  <div class="file-header">
  <div class="file-actions">

    <div class="btn-group">
      <a href="/SteveSanderson/knockout.mapping/raw/master/build/output/knockout.mapping-latest.js" class="btn btn-sm " id="raw-url">Raw</a>
        <a href="/SteveSanderson/knockout.mapping/blame/master/build/output/knockout.mapping-latest.js" class="btn btn-sm js-update-url-with-hash">Blame</a>
      <a href="/SteveSanderson/knockout.mapping/commits/master/build/output/knockout.mapping-latest.js" class="btn btn-sm " rel="nofollow">History</a>
    </div>


        <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/SteveSanderson/knockout.mapping/edit/master/build/output/knockout.mapping-latest.js" class="inline-form js-update-url-with-hash" data-form-nonce="e7770b2f0a786400fc416b65ccf89db0fb4bbcce" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="4t93Mn6X3gxOHx2mSLlxkIrPQNaJG0niLsh023fKCA8wt5eH/ubVDfcRI145cycqCG/rxChdyfhED3b9HKJMmQ==" /></div>
          <button class="btn-octicon tooltipped tooltipped-nw" type="submit"
            aria-label="Fork this project and edit the file" data-hotkey="e" data-disable-with>
            <svg aria-hidden="true" class="octicon octicon-pencil" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"></path></svg>
          </button>
</form>        <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/SteveSanderson/knockout.mapping/delete/master/build/output/knockout.mapping-latest.js" class="inline-form" data-form-nonce="e7770b2f0a786400fc416b65ccf89db0fb4bbcce" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="xjcYythaICImCYnjL8Z7QdWHTFKJoX7DDaFhftw8uYAMxDIndcDMpr+d2ZFY9JImWFeaZrAG7FQ625KpoYQqcg==" /></div>
          <button class="btn-octicon btn-octicon-danger tooltipped tooltipped-nw" type="submit"
            aria-label="Fork this project and delete the file" data-disable-with>
            <svg aria-hidden="true" class="octicon octicon-trashcan" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z"></path></svg>
          </button>
</form>  </div>

  <div class="file-info">
      23 lines (22 sloc)
      <span class="file-info-divider"></span>
    9.3 KB
  </div>
</div>

  

  <div itemprop="text" class="blob-wrapper data type-javascript">
      <table class="highlight tab-size js-file-line-container" data-tab-size="8">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-c">/// Knockout Mapping plugin v2.4.1</span></td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code blob-code-inner js-file-line"><span class="pl-c">/// (c) 2013 Steven Sanderson, Roy Jacobs - http://knockoutjs.com/</span></td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code blob-code-inner js-file-line"><span class="pl-c">/// License: MIT (http://www.opensource.org/licenses/mit-license.php)</span></td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code blob-code-inner js-file-line">(<span class="pl-k">function</span>(<span class="pl-smi">e</span>){<span class="pl-s"><span class="pl-pds">&quot;</span>function<span class="pl-pds">&quot;</span></span><span class="pl-k">===</span><span class="pl-k">typeof</span> require<span class="pl-k">&amp;&amp;</span><span class="pl-s"><span class="pl-pds">&quot;</span>object<span class="pl-pds">&quot;</span></span><span class="pl-k">===</span><span class="pl-k">typeof</span> <span class="pl-c1">exports</span><span class="pl-k">&amp;&amp;</span><span class="pl-s"><span class="pl-pds">&quot;</span>object<span class="pl-pds">&quot;</span></span><span class="pl-k">===</span><span class="pl-k">typeof</span> <span class="pl-c1">module</span><span class="pl-k">?</span><span class="pl-en">e</span>(<span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>knockout<span class="pl-pds">&quot;</span></span>),<span class="pl-c1">exports</span>)<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>function<span class="pl-pds">&quot;</span></span><span class="pl-k">===</span><span class="pl-k">typeof</span> define<span class="pl-k">&amp;&amp;</span><span class="pl-smi">define</span>.<span class="pl-smi">amd</span><span class="pl-k">?</span><span class="pl-en">define</span>([<span class="pl-s"><span class="pl-pds">&quot;</span>knockout<span class="pl-pds">&quot;</span></span>,<span class="pl-s"><span class="pl-pds">&quot;</span>exports<span class="pl-pds">&quot;</span></span>],e)<span class="pl-k">:</span><span class="pl-en">e</span>(ko,<span class="pl-smi">ko</span>.<span class="pl-smi">mapping</span><span class="pl-k">=</span>{})})(<span class="pl-k">function</span>(<span class="pl-smi">e</span>,<span class="pl-smi">f</span>){<span class="pl-k">function</span> <span class="pl-en">y</span>(<span class="pl-smi">b</span>,<span class="pl-smi">c</span>){<span class="pl-k">var</span> a,d;<span class="pl-k">for</span>(d <span class="pl-k">in</span> c)<span class="pl-k">if</span>(<span class="pl-smi">c</span>.<span class="pl-en">hasOwnProperty</span>(d)<span class="pl-k">&amp;&amp;</span>c[d])<span class="pl-k">if</span>(a<span class="pl-k">=</span><span class="pl-smi">f</span>.<span class="pl-en">getType</span>(b[d]),d<span class="pl-k">&amp;&amp;</span>b[d]<span class="pl-k">&amp;&amp;</span><span class="pl-s"><span class="pl-pds">&quot;</span>array<span class="pl-pds">&quot;</span></span><span class="pl-k">!==</span>a<span class="pl-k">&amp;&amp;</span><span class="pl-s"><span class="pl-pds">&quot;</span>string<span class="pl-pds">&quot;</span></span><span class="pl-k">!==</span>a)<span class="pl-en">y</span>(b[d],c[d]);<span class="pl-k">else</span> <span class="pl-k">if</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>array<span class="pl-pds">&quot;</span></span><span class="pl-k">===</span><span class="pl-smi">f</span>.<span class="pl-en">getType</span>(b[d])<span class="pl-k">&amp;&amp;</span><span class="pl-s"><span class="pl-pds">&quot;</span>array<span class="pl-pds">&quot;</span></span><span class="pl-k">===</span><span class="pl-smi">f</span>.<span class="pl-en">getType</span>(c[d])){a<span class="pl-k">=</span>b;<span class="pl-k">for</span>(<span class="pl-k">var</span> e<span class="pl-k">=</span>d,l<span class="pl-k">=</span>b[d],n<span class="pl-k">=</span>c[d],t<span class="pl-k">=</span>{},g<span class="pl-k">=</span><span class="pl-smi">l</span>.<span class="pl-c1">length</span><span class="pl-k">-</span><span class="pl-c1">1</span>;<span class="pl-c1">0</span><span class="pl-k">&lt;=</span>g;<span class="pl-k">--</span>g)t[l[g]]<span class="pl-k">=</span>l[g];<span class="pl-k">for</span>(g<span class="pl-k">=</span></td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">n</span>.<span class="pl-c1">length</span><span class="pl-k">-</span><span class="pl-c1">1</span>;<span class="pl-c1">0</span><span class="pl-k">&lt;=</span>g;<span class="pl-k">--</span>g)t[n[g]]<span class="pl-k">=</span>n[g];l<span class="pl-k">=</span>[];n<span class="pl-k">=</span><span class="pl-k">void</span> <span class="pl-c1">0</span>;<span class="pl-k">for</span>(n <span class="pl-k">in</span> t)<span class="pl-smi">l</span>.<span class="pl-c1">push</span>(t[n]);a[e]<span class="pl-k">=</span>l}<span class="pl-k">else</span> b[d]<span class="pl-k">=</span>c[d]}function E(b,c){var a={};y(a,b);y(a,c);return a}function z(b,c){for(var a=E({},b),e=L.length-1;0&lt;=e;e--){var f=L[e];a[f]&amp;&amp;(a[&quot;&quot;]instanceof Object||(a[&quot;&quot;]={}),a[&quot;&quot;][f]=a[f],delete a[f])}c&amp;&amp;(a.ignore=h(c.ignore,a.ignore),a.include=h(c.include,a.include),a.copy=h(c.copy,a.copy),a.observe=h(c.observe,a.observe));a.ignore=h(a.ignore,j.ignore);a.include=h(a.include,j.include);a.copy=h(a.copy,j.copy);a.observe=h(a.observe,</td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">j</span>.<span class="pl-smi">observe</span>);<span class="pl-smi">a</span>.<span class="pl-smi">mappedProperties</span><span class="pl-k">=</span><span class="pl-smi">a</span>.<span class="pl-smi">mappedProperties</span><span class="pl-k">||</span>{};<span class="pl-smi">a</span>.<span class="pl-smi">copiedProperties</span><span class="pl-k">=</span><span class="pl-smi">a</span>.<span class="pl-smi">copiedProperties</span><span class="pl-k">||</span>{};<span class="pl-k">return</span> a}function h(b,c){&quot;array&quot;!==f.getType(b)&amp;&amp;(b=&quot;undefined&quot;===f.getType(b)?[]:[b]);&quot;array&quot;!==f.getType(c)&amp;&amp;(c=&quot;undefined&quot;===f.getType(c)?[]:[c]);return e.utils.arrayGetDistinctValues(b.concat(c))}function F(b,c,a,d,k,l,n){var t=&quot;array&quot;===f.getType(e.utils.unwrapObservable(c));l=l||&quot;&quot;;if(f.isMapped(b)){var g=e.utils.unwrapObservable(b)[p];a=E(g,a)}var j=n||k,h=function(){return a[d]&amp;&amp;a[d].create instanceof</td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">Function</span>},<span class="pl-en">x</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">b</span>){<span class="pl-k">var</span> f<span class="pl-k">=</span>G,g<span class="pl-k">=</span><span class="pl-smi">e</span>.<span class="pl-smi">dependentObservable</span>;<span class="pl-smi">e</span>.<span class="pl-en">dependentObservable</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">a</span>,<span class="pl-smi">b</span>,<span class="pl-smi">c</span>){c<span class="pl-k">=</span>c<span class="pl-k">||</span>{};a<span class="pl-k">&amp;&amp;</span><span class="pl-s"><span class="pl-pds">&quot;</span>object<span class="pl-pds">&quot;</span></span><span class="pl-k">==</span><span class="pl-k">typeof</span> a<span class="pl-k">&amp;&amp;</span>(c<span class="pl-k">=</span>a);<span class="pl-k">var</span> d<span class="pl-k">=</span><span class="pl-smi">c</span>.<span class="pl-smi">deferEvaluation</span>,M<span class="pl-k">=</span><span class="pl-k">!</span><span class="pl-c1">1</span>;<span class="pl-smi">c</span>.<span class="pl-smi">deferEvaluation</span><span class="pl-k">=</span><span class="pl-k">!</span><span class="pl-c1">0</span>;a<span class="pl-k">=</span><span class="pl-k">new</span> <span class="pl-en">H</span>(a,b,c);<span class="pl-k">if</span>(<span class="pl-k">!</span>d){<span class="pl-k">var</span> g<span class="pl-k">=</span>a,d<span class="pl-k">=</span><span class="pl-smi">e</span>.<span class="pl-smi">dependentObservable</span>;<span class="pl-smi">e</span>.<span class="pl-smi">dependentObservable</span><span class="pl-k">=</span>H;a<span class="pl-k">=</span><span class="pl-smi">e</span>.<span class="pl-en">isWriteableObservable</span>(g);<span class="pl-smi">e</span>.<span class="pl-smi">dependentObservable</span><span class="pl-k">=</span>d;d<span class="pl-k">=</span><span class="pl-en">H</span>({<span class="pl-en">read</span><span class="pl-k">:</span><span class="pl-k">function</span>(){M<span class="pl-k">||</span>(<span class="pl-smi">e</span>.<span class="pl-smi">utils</span>.<span class="pl-en">arrayRemoveItem</span>(f,g),M<span class="pl-k">=</span><span class="pl-k">!</span><span class="pl-c1">0</span>);<span class="pl-k">return</span> <span class="pl-smi">g</span>.<span class="pl-c1">apply</span>(g,<span class="pl-v">arguments</span>)},write<span class="pl-k">:</span>a<span class="pl-k">&amp;&amp;</span><span class="pl-k">function</span>(<span class="pl-smi">a</span>){<span class="pl-k">return</span> <span class="pl-en">g</span>(a)},deferEvaluation<span class="pl-k">:</span><span class="pl-k">!</span><span class="pl-c1">0</span>});<span class="pl-smi">d</span>.<span class="pl-smi">__DO</span><span class="pl-k">=</span>g;a<span class="pl-k">=</span>d;<span class="pl-smi">f</span>.<span class="pl-c1">push</span>(a)}<span class="pl-k">return</span> a};<span class="pl-smi">e</span>.<span class="pl-smi">dependentObservable</span>.<span class="pl-smi">fn</span><span class="pl-k">=</span></td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">H</span>.<span class="pl-smi">fn</span>;<span class="pl-smi">e</span>.<span class="pl-smi">computed</span><span class="pl-k">=</span><span class="pl-smi">e</span>.<span class="pl-smi">dependentObservable</span>;b<span class="pl-k">=</span><span class="pl-smi">e</span>.<span class="pl-smi">utils</span>.<span class="pl-en">unwrapObservable</span>(k)<span class="pl-k">instanceof</span> <span class="pl-c1">Array</span><span class="pl-k">?</span>a[d].<span class="pl-en">create</span>({data<span class="pl-k">:</span>b<span class="pl-k">||</span>c,parent<span class="pl-k">:</span>j,skip<span class="pl-k">:</span>N})<span class="pl-k">:</span>a[d].<span class="pl-en">create</span>({data<span class="pl-k">:</span>b<span class="pl-k">||</span>c,parent<span class="pl-k">:</span>j});<span class="pl-smi">e</span>.<span class="pl-smi">dependentObservable</span><span class="pl-k">=</span>g;<span class="pl-smi">e</span>.<span class="pl-smi">computed</span><span class="pl-k">=</span><span class="pl-smi">e</span>.<span class="pl-smi">dependentObservable</span>;<span class="pl-k">return</span> b},<span class="pl-en">u</span><span class="pl-k">=</span><span class="pl-k">function</span>(){<span class="pl-k">return</span> a[d]<span class="pl-k">&amp;&amp;</span>a[d].<span class="pl-smi">update</span> <span class="pl-k">instanceof</span> <span class="pl-c1">Function</span>},<span class="pl-en">v</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">b</span>,<span class="pl-smi">f</span>){<span class="pl-k">var</span> g<span class="pl-k">=</span>{data<span class="pl-k">:</span>f<span class="pl-k">||</span>c,parent<span class="pl-k">:</span>j,target<span class="pl-k">:</span><span class="pl-smi">e</span>.<span class="pl-smi">utils</span>.<span class="pl-en">unwrapObservable</span>(b)};<span class="pl-smi">e</span>.<span class="pl-en">isWriteableObservable</span>(b)<span class="pl-k">&amp;&amp;</span>(<span class="pl-smi">g</span>.<span class="pl-smi">observable</span><span class="pl-k">=</span>b);<span class="pl-k">return</span> a[d].<span class="pl-en">update</span>(g)};<span class="pl-k">if</span>(n<span class="pl-k">=</span><span class="pl-c1">I</span>.<span class="pl-en">get</span>(c))<span class="pl-k">return</span> n;d<span class="pl-k">=</span>d<span class="pl-k">||</span><span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>;<span class="pl-k">if</span>(t){<span class="pl-k">var</span> t<span class="pl-k">=</span>[],s<span class="pl-k">=</span><span class="pl-k">!</span><span class="pl-c1">1</span>,<span class="pl-en">m</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">a</span>){<span class="pl-k">return</span> a};</td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code blob-code-inner js-file-line">a[d]<span class="pl-k">&amp;&amp;</span>a[d].<span class="pl-smi">key</span><span class="pl-k">&amp;&amp;</span>(m<span class="pl-k">=</span>a[d].<span class="pl-smi">key</span>,s<span class="pl-k">=</span><span class="pl-k">!</span><span class="pl-c1">0</span>);<span class="pl-smi">e</span>.<span class="pl-en">isObservable</span>(b)<span class="pl-k">||</span>(b<span class="pl-k">=</span><span class="pl-smi">e</span>.<span class="pl-en">observableArray</span>([]),<span class="pl-smi">b</span>.<span class="pl-en">mappedRemove</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">a</span>){<span class="pl-k">var</span> c<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&quot;</span>function<span class="pl-pds">&quot;</span></span><span class="pl-k">==</span><span class="pl-k">typeof</span> a<span class="pl-k">?</span><span class="pl-en">a</span><span class="pl-k">:</span><span class="pl-k">function</span>(<span class="pl-smi">b</span>){<span class="pl-k">return</span> b<span class="pl-k">===</span><span class="pl-en">m</span>(a)};<span class="pl-k">return</span> <span class="pl-smi">b</span>.<span class="pl-en">remove</span>(<span class="pl-k">function</span>(<span class="pl-smi">a</span>){<span class="pl-k">return</span> <span class="pl-en">c</span>(<span class="pl-en">m</span>(a))})},<span class="pl-smi">b</span>.<span class="pl-en">mappedRemoveAll</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">a</span>){<span class="pl-k">var</span> c<span class="pl-k">=</span><span class="pl-en">C</span>(a,m);<span class="pl-k">return</span> <span class="pl-smi">b</span>.<span class="pl-en">remove</span>(<span class="pl-k">function</span>(<span class="pl-smi">a</span>){<span class="pl-k">return</span><span class="pl-k">-</span><span class="pl-c1">1</span><span class="pl-k">!=</span><span class="pl-smi">e</span>.<span class="pl-smi">utils</span>.<span class="pl-en">arrayIndexOf</span>(c,<span class="pl-en">m</span>(a))})},<span class="pl-smi">b</span>.<span class="pl-en">mappedDestroy</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">a</span>){<span class="pl-k">var</span> c<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&quot;</span>function<span class="pl-pds">&quot;</span></span><span class="pl-k">==</span><span class="pl-k">typeof</span> a<span class="pl-k">?</span><span class="pl-en">a</span><span class="pl-k">:</span><span class="pl-k">function</span>(<span class="pl-smi">b</span>){<span class="pl-k">return</span> b<span class="pl-k">===</span><span class="pl-en">m</span>(a)};<span class="pl-k">return</span> <span class="pl-smi">b</span>.<span class="pl-en">destroy</span>(<span class="pl-k">function</span>(<span class="pl-smi">a</span>){<span class="pl-k">return</span> <span class="pl-en">c</span>(<span class="pl-en">m</span>(a))})},<span class="pl-smi">b</span>.<span class="pl-en">mappedDestroyAll</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">a</span>){<span class="pl-k">var</span> c<span class="pl-k">=</span><span class="pl-en">C</span>(a,m);<span class="pl-k">return</span> <span class="pl-smi">b</span>.<span class="pl-en">destroy</span>(<span class="pl-k">function</span>(<span class="pl-smi">a</span>){<span class="pl-k">return</span><span class="pl-k">-</span><span class="pl-c1">1</span><span class="pl-k">!=</span></td>
      </tr>
      <tr>
        <td id="L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">e</span>.<span class="pl-smi">utils</span>.<span class="pl-en">arrayIndexOf</span>(c,<span class="pl-en">m</span>(a))})},<span class="pl-smi">b</span>.<span class="pl-en">mappedIndexOf</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">a</span>){<span class="pl-k">var</span> c<span class="pl-k">=</span><span class="pl-en">C</span>(<span class="pl-en">b</span>(),m);a<span class="pl-k">=</span><span class="pl-en">m</span>(a);<span class="pl-k">return</span> <span class="pl-smi">e</span>.<span class="pl-smi">utils</span>.<span class="pl-en">arrayIndexOf</span>(c,a)},<span class="pl-smi">b</span>.<span class="pl-en">mappedGet</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">a</span>){<span class="pl-k">return</span> <span class="pl-en">b</span>()[<span class="pl-smi">b</span>.<span class="pl-en">mappedIndexOf</span>(a)]},<span class="pl-smi">b</span>.<span class="pl-en">mappedCreate</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">a</span>){<span class="pl-k">if</span>(<span class="pl-k">-</span><span class="pl-c1">1</span><span class="pl-k">!==</span><span class="pl-smi">b</span>.<span class="pl-en">mappedIndexOf</span>(a))<span class="pl-k">throw</span> <span class="pl-en">Error</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>There already is an object with the key that you specified.<span class="pl-pds">&quot;</span></span>);<span class="pl-k">var</span> c<span class="pl-k">=</span><span class="pl-en">h</span>()<span class="pl-k">?</span><span class="pl-en">x</span>(a)<span class="pl-k">:</span>a;<span class="pl-en">u</span>()<span class="pl-k">&amp;&amp;</span>(a<span class="pl-k">=</span><span class="pl-en">v</span>(c,a),<span class="pl-smi">e</span>.<span class="pl-en">isWriteableObservable</span>(c)<span class="pl-k">?</span><span class="pl-en">c</span>(a)<span class="pl-k">:</span>c<span class="pl-k">=</span>a);<span class="pl-smi">b</span>.<span class="pl-c1">push</span>(c);<span class="pl-k">return</span> c});n<span class="pl-k">=</span><span class="pl-en">C</span>(<span class="pl-smi">e</span>.<span class="pl-smi">utils</span>.<span class="pl-en">unwrapObservable</span>(b),m).<span class="pl-c1">sort</span>();g<span class="pl-k">=</span><span class="pl-en">C</span>(c,m);s<span class="pl-k">&amp;&amp;</span><span class="pl-smi">g</span>.<span class="pl-c1">sort</span>();s<span class="pl-k">=</span><span class="pl-smi">e</span>.<span class="pl-smi">utils</span>.<span class="pl-en">compareArrays</span>(n,g);n<span class="pl-k">=</span>{};<span class="pl-k">var</span> J,A<span class="pl-k">=</span><span class="pl-smi">e</span>.<span class="pl-smi">utils</span>.<span class="pl-en">unwrapObservable</span>(c),</td>
      </tr>
      <tr>
        <td id="L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-code blob-code-inner js-file-line">y<span class="pl-k">=</span>{},z<span class="pl-k">=</span><span class="pl-k">!</span><span class="pl-c1">0</span>,g<span class="pl-k">=</span><span class="pl-c1">0</span>;<span class="pl-k">for</span>(J<span class="pl-k">=</span><span class="pl-c1">A</span>.<span class="pl-c1">length</span>;g<span class="pl-k">&lt;</span>J;g<span class="pl-k">++</span>){<span class="pl-k">var</span> r<span class="pl-k">=</span><span class="pl-en">m</span>(A[g]);<span class="pl-k">if</span>(<span class="pl-k">void</span> <span class="pl-c1">0</span><span class="pl-k">===</span>r<span class="pl-k">||</span>r <span class="pl-k">instanceof</span> <span class="pl-c1">Object</span>){z<span class="pl-k">=</span><span class="pl-k">!</span><span class="pl-c1">1</span>;<span class="pl-k">break</span>}y[r]<span class="pl-k">=</span>A[g]}<span class="pl-k">var</span> A<span class="pl-k">=</span>[],B<span class="pl-k">=</span><span class="pl-c1">0</span>,g<span class="pl-k">=</span><span class="pl-c1">0</span>;<span class="pl-k">for</span>(J<span class="pl-k">=</span><span class="pl-smi">s</span>.<span class="pl-c1">length</span>;g<span class="pl-k">&lt;</span>J;g<span class="pl-k">++</span>){<span class="pl-k">var</span> r<span class="pl-k">=</span>s[g],q,w<span class="pl-k">=</span>l<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&quot;</span>[<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>g<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&quot;</span>]<span class="pl-pds">&quot;</span></span>;<span class="pl-k">switch</span>(<span class="pl-smi">r</span>.<span class="pl-c1">status</span>){<span class="pl-k">case</span> <span class="pl-s"><span class="pl-pds">&quot;</span>added<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-k">var</span> D<span class="pl-k">=</span>z<span class="pl-k">?</span>y[<span class="pl-smi">r</span>.<span class="pl-c1">value</span>]<span class="pl-k">:</span><span class="pl-en">K</span>(<span class="pl-smi">e</span>.<span class="pl-smi">utils</span>.<span class="pl-en">unwrapObservable</span>(c),<span class="pl-smi">r</span>.<span class="pl-c1">value</span>,m);q<span class="pl-k">=</span><span class="pl-en">F</span>(<span class="pl-k">void</span> <span class="pl-c1">0</span>,D,a,d,b,w,k);<span class="pl-en">h</span>()<span class="pl-k">||</span>(q<span class="pl-k">=</span><span class="pl-smi">e</span>.<span class="pl-smi">utils</span>.<span class="pl-en">unwrapObservable</span>(q));w<span class="pl-k">=</span><span class="pl-en">O</span>(<span class="pl-smi">e</span>.<span class="pl-smi">utils</span>.<span class="pl-en">unwrapObservable</span>(c),D,n);q<span class="pl-k">===</span>N<span class="pl-k">?</span>B<span class="pl-k">++</span><span class="pl-k">:</span>A[w<span class="pl-k">-</span>B]<span class="pl-k">=</span>q;n[w]<span class="pl-k">=</span><span class="pl-k">!</span><span class="pl-c1">0</span>;<span class="pl-k">break</span>;<span class="pl-k">case</span> <span class="pl-s"><span class="pl-pds">&quot;</span>retained<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>D<span class="pl-k">=</span>z<span class="pl-k">?</span>y[<span class="pl-smi">r</span>.<span class="pl-c1">value</span>]<span class="pl-k">:</span><span class="pl-en">K</span>(<span class="pl-smi">e</span>.<span class="pl-smi">utils</span>.<span class="pl-en">unwrapObservable</span>(c),<span class="pl-smi">r</span>.<span class="pl-c1">value</span>,m);q<span class="pl-k">=</span><span class="pl-en">K</span>(b,<span class="pl-smi">r</span>.<span class="pl-c1">value</span>,m);<span class="pl-en">F</span>(q,D,a,d,b,w,</td>
      </tr>
      <tr>
        <td id="L12" class="blob-num js-line-number" data-line-number="12"></td>
        <td id="LC12" class="blob-code blob-code-inner js-file-line">k);w<span class="pl-k">=</span><span class="pl-en">O</span>(<span class="pl-smi">e</span>.<span class="pl-smi">utils</span>.<span class="pl-en">unwrapObservable</span>(c),D,n);A[w]<span class="pl-k">=</span>q;n[w]<span class="pl-k">=</span><span class="pl-k">!</span><span class="pl-c1">0</span>;<span class="pl-k">break</span>;<span class="pl-k">case</span> <span class="pl-s"><span class="pl-pds">&quot;</span>deleted<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>q<span class="pl-k">=</span><span class="pl-en">K</span>(b,<span class="pl-smi">r</span>.<span class="pl-c1">value</span>,m)}<span class="pl-smi">t</span>.<span class="pl-c1">push</span>({<span class="pl-c1">event</span><span class="pl-k">:</span><span class="pl-smi">r</span>.<span class="pl-c1">status</span>,item<span class="pl-k">:</span>q})}<span class="pl-en">b</span>(A);a[d]<span class="pl-k">&amp;&amp;</span>a[d].<span class="pl-smi">arrayChanged</span><span class="pl-k">&amp;&amp;</span><span class="pl-smi">e</span>.<span class="pl-smi">utils</span>.<span class="pl-en">arrayForEach</span>(t,<span class="pl-k">function</span>(<span class="pl-smi">b</span>){a[d].<span class="pl-en">arrayChanged</span>(<span class="pl-smi">b</span>.<span class="pl-c1">event</span>,<span class="pl-smi">b</span>.<span class="pl-smi">item</span>)})}<span class="pl-k">else</span> <span class="pl-k">if</span>(<span class="pl-en">P</span>(c)){b<span class="pl-k">=</span><span class="pl-smi">e</span>.<span class="pl-smi">utils</span>.<span class="pl-en">unwrapObservable</span>(b);<span class="pl-k">if</span>(<span class="pl-k">!</span>b){<span class="pl-k">if</span>(<span class="pl-en">h</span>())<span class="pl-k">return</span> s<span class="pl-k">=</span><span class="pl-en">x</span>(),<span class="pl-en">u</span>()<span class="pl-k">&amp;&amp;</span>(s<span class="pl-k">=</span><span class="pl-en">v</span>(s)),s;<span class="pl-k">if</span>(<span class="pl-en">u</span>())<span class="pl-k">return</span> <span class="pl-en">v</span>(s);b<span class="pl-k">=</span>{}}<span class="pl-en">u</span>()<span class="pl-k">&amp;&amp;</span>(b<span class="pl-k">=</span><span class="pl-en">v</span>(b));<span class="pl-c1">I</span>.<span class="pl-en">save</span>(c,b);<span class="pl-k">if</span>(<span class="pl-en">u</span>())<span class="pl-k">return</span> b;<span class="pl-en">Q</span>(c,<span class="pl-k">function</span>(<span class="pl-smi">d</span>){<span class="pl-k">var</span> f<span class="pl-k">=</span><span class="pl-smi">l</span>.<span class="pl-c1">length</span><span class="pl-k">?</span>l<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&quot;</span>.<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>d<span class="pl-k">:</span>d;<span class="pl-k">if</span>(<span class="pl-k">-</span><span class="pl-c1">1</span><span class="pl-k">==</span><span class="pl-smi">e</span>.<span class="pl-smi">utils</span>.<span class="pl-en">arrayIndexOf</span>(<span class="pl-smi">a</span>.<span class="pl-smi">ignore</span>,f))<span class="pl-k">if</span>(<span class="pl-k">-</span><span class="pl-c1">1</span><span class="pl-k">!=</span><span class="pl-smi">e</span>.<span class="pl-smi">utils</span>.<span class="pl-en">arrayIndexOf</span>(<span class="pl-smi">a</span>.<span class="pl-smi">copy</span>,f))b[d]<span class="pl-k">=</span></td>
      </tr>
      <tr>
        <td id="L13" class="blob-num js-line-number" data-line-number="13"></td>
        <td id="LC13" class="blob-code blob-code-inner js-file-line">c[d];<span class="pl-k">else</span> <span class="pl-k">if</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>object<span class="pl-pds">&quot;</span></span><span class="pl-k">!=</span><span class="pl-k">typeof</span> c[d]<span class="pl-k">&amp;&amp;</span><span class="pl-s"><span class="pl-pds">&quot;</span>array<span class="pl-pds">&quot;</span></span><span class="pl-k">!=</span><span class="pl-k">typeof</span> c[d]<span class="pl-k">&amp;&amp;</span><span class="pl-c1">0</span><span class="pl-k">&lt;</span><span class="pl-smi">a</span>.<span class="pl-smi">observe</span>.<span class="pl-c1">length</span><span class="pl-k">&amp;&amp;</span><span class="pl-k">-</span><span class="pl-c1">1</span><span class="pl-k">==</span><span class="pl-smi">e</span>.<span class="pl-smi">utils</span>.<span class="pl-en">arrayIndexOf</span>(<span class="pl-smi">a</span>.<span class="pl-smi">observe</span>,f))b[d]<span class="pl-k">=</span>c[d],<span class="pl-smi">a</span>.<span class="pl-smi">copiedProperties</span>[f]<span class="pl-k">=</span><span class="pl-k">!</span><span class="pl-c1">0</span>;<span class="pl-k">else</span>{<span class="pl-k">var</span> g<span class="pl-k">=</span><span class="pl-c1">I</span>.<span class="pl-en">get</span>(c[d]),k<span class="pl-k">=</span><span class="pl-en">F</span>(b[d],c[d],a,d,b,f,b),g<span class="pl-k">=</span>g<span class="pl-k">||</span>k;<span class="pl-k">if</span>(<span class="pl-c1">0</span><span class="pl-k">&lt;</span><span class="pl-smi">a</span>.<span class="pl-smi">observe</span>.<span class="pl-c1">length</span><span class="pl-k">&amp;&amp;</span><span class="pl-k">-</span><span class="pl-c1">1</span><span class="pl-k">==</span><span class="pl-smi">e</span>.<span class="pl-smi">utils</span>.<span class="pl-en">arrayIndexOf</span>(<span class="pl-smi">a</span>.<span class="pl-smi">observe</span>,f))b[d]<span class="pl-k">=</span><span class="pl-en">g</span>(),<span class="pl-smi">a</span>.<span class="pl-smi">copiedProperties</span>[f]<span class="pl-k">=</span><span class="pl-k">!</span><span class="pl-c1">0</span>;<span class="pl-k">else</span>{<span class="pl-k">if</span>(<span class="pl-smi">e</span>.<span class="pl-en">isWriteableObservable</span>(b[d])){<span class="pl-k">if</span>(g<span class="pl-k">=</span><span class="pl-smi">e</span>.<span class="pl-smi">utils</span>.<span class="pl-en">unwrapObservable</span>(g),b[d]()<span class="pl-k">!==</span>g)b[d](g)}<span class="pl-k">else</span> g<span class="pl-k">=</span><span class="pl-k">void</span> <span class="pl-c1">0</span><span class="pl-k">===</span>b[d]<span class="pl-k">?</span>g<span class="pl-k">:</span><span class="pl-smi">e</span>.<span class="pl-smi">utils</span>.<span class="pl-en">unwrapObservable</span>(g),b[d]<span class="pl-k">=</span>g;<span class="pl-smi">a</span>.<span class="pl-smi">mappedProperties</span>[f]<span class="pl-k">=</span><span class="pl-k">!</span><span class="pl-c1">0</span>}}})}<span class="pl-k">else</span> <span class="pl-k">switch</span>(<span class="pl-smi">f</span>.<span class="pl-en">getType</span>(c)){<span class="pl-k">case</span> <span class="pl-s"><span class="pl-pds">&quot;</span>function<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-en">u</span>()<span class="pl-k">?</span></td>
      </tr>
      <tr>
        <td id="L14" class="blob-num js-line-number" data-line-number="14"></td>
        <td id="LC14" class="blob-code blob-code-inner js-file-line"><span class="pl-smi">e</span>.<span class="pl-en">isWriteableObservable</span>(c)<span class="pl-k">?</span>(<span class="pl-en">c</span>(<span class="pl-en">v</span>(c)),b<span class="pl-k">=</span>c)<span class="pl-k">:</span>b<span class="pl-k">=</span><span class="pl-en">v</span>(c)<span class="pl-k">:</span>b<span class="pl-k">=</span>c;<span class="pl-k">break</span>;<span class="pl-k">default</span><span class="pl-k">:</span><span class="pl-k">if</span>(<span class="pl-smi">e</span>.<span class="pl-en">isWriteableObservable</span>(b))<span class="pl-k">return</span> q<span class="pl-k">=</span><span class="pl-en">u</span>()<span class="pl-k">?</span><span class="pl-en">v</span>(b)<span class="pl-k">:</span><span class="pl-smi">e</span>.<span class="pl-smi">utils</span>.<span class="pl-en">unwrapObservable</span>(c),<span class="pl-en">b</span>(q),q;<span class="pl-en">h</span>()<span class="pl-k">||</span><span class="pl-en">u</span>();b<span class="pl-k">=</span><span class="pl-en">h</span>()<span class="pl-k">?</span><span class="pl-en">x</span>()<span class="pl-k">:</span><span class="pl-smi">e</span>.<span class="pl-en">observable</span>(<span class="pl-smi">e</span>.<span class="pl-smi">utils</span>.<span class="pl-en">unwrapObservable</span>(c));<span class="pl-en">u</span>()<span class="pl-k">&amp;&amp;</span><span class="pl-en">b</span>(<span class="pl-en">v</span>(b))}<span class="pl-k">return</span> b}function O(b,c,a){for(var d=0,e=b.length;d&lt;e;d++)if(!0!==a[d]&amp;&amp;b[d]===c)return d;return null}function R(b,c){var a;c&amp;&amp;(a=c(b));&quot;undefined&quot;===f.getType(a)&amp;&amp;(a=b);return e.utils.unwrapObservable(a)}function K(b,c,a){b=e.utils.unwrapObservable(b);for(var d=0,f=b.length;d&lt;</td>
      </tr>
      <tr>
        <td id="L15" class="blob-num js-line-number" data-line-number="15"></td>
        <td id="LC15" class="blob-code blob-code-inner js-file-line">f;d<span class="pl-k">++</span>){<span class="pl-k">var</span> l<span class="pl-k">=</span>b[d];<span class="pl-k">if</span>(<span class="pl-en">R</span>(l,a)<span class="pl-k">===</span>c)<span class="pl-k">return</span> l}<span class="pl-k">throw</span> <span class="pl-en">Error</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>When calling ko.update*, the key &#39;<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>c<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&quot;</span>&#39; was not found!<span class="pl-pds">&quot;</span></span>);}function C(b,c){return e.utils.arrayMap(e.utils.unwrapObservable(b),function(a){return c?R(a,c):a})}function Q(b,c){if(&quot;array&quot;===f.getType(b))for(var a=0;a&lt;b.length;a++)c(a);else for(a in b)c(a)}function P(b){var c=f.getType(b);return(&quot;object&quot;===c||&quot;array&quot;===c)&amp;&amp;null!==b}function T(){var b=[],c=[];this.save=function(a,d){var f=e.utils.arrayIndexOf(b,a);0&lt;=f?c[f]=d:(b.push(a),c.push(d))};</td>
      </tr>
      <tr>
        <td id="L16" class="blob-num js-line-number" data-line-number="16"></td>
        <td id="LC16" class="blob-code blob-code-inner js-file-line"><span class="pl-v">this</span>.<span class="pl-en">get</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">a</span>){a<span class="pl-k">=</span><span class="pl-smi">e</span>.<span class="pl-smi">utils</span>.<span class="pl-en">arrayIndexOf</span>(b,a);<span class="pl-k">return</span> <span class="pl-c1">0</span><span class="pl-k">&lt;=</span>a<span class="pl-k">?</span>c[a]<span class="pl-k">:</span><span class="pl-k">void</span> <span class="pl-c1">0</span>}}function S(){var b={},c=function(a){var c;try{c=a}catch(e){c=&quot;$$$&quot;}a=b[c];void 0===a&amp;&amp;(a=new T,b[c]=a);return a};this.save=function(a,b){c(a).save(a,b)};this.get=function(a){return c(a).get(a)}}var p=&quot;__ko_mapping__&quot;,H=e.dependentObservable,B=0,G,I,L=[&quot;create&quot;,&quot;update&quot;,&quot;key&quot;,&quot;arrayChanged&quot;],N={},x={include:[&quot;_destroy&quot;],ignore:[],copy:[],observe:[]},j=x;f.isMapped=function(b){return(b=e.utils.unwrapObservable(b))&amp;&amp;b[p]};f.fromJS=</td>
      </tr>
      <tr>
        <td id="L17" class="blob-num js-line-number" data-line-number="17"></td>
        <td id="LC17" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span>(<span class="pl-smi">b</span>){<span class="pl-k">if</span>(<span class="pl-c1">0</span><span class="pl-k">==</span><span class="pl-v">arguments</span>.<span class="pl-c1">length</span>)<span class="pl-k">throw</span> <span class="pl-en">Error</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>When calling ko.fromJS, pass the object you want to convert.<span class="pl-pds">&quot;</span></span>);<span class="pl-k">try</span>{B<span class="pl-k">++</span><span class="pl-k">||</span>(G<span class="pl-k">=</span>[],I<span class="pl-k">=</span><span class="pl-k">new</span> <span class="pl-en">S</span>);<span class="pl-k">var</span> c,a;<span class="pl-c1">2</span><span class="pl-k">==</span><span class="pl-v">arguments</span>.<span class="pl-c1">length</span><span class="pl-k">&amp;&amp;</span>(<span class="pl-v">arguments</span>[<span class="pl-c1">1</span>][p]<span class="pl-k">?</span>a<span class="pl-k">=</span><span class="pl-v">arguments</span>[<span class="pl-c1">1</span>]<span class="pl-k">:</span>c<span class="pl-k">=</span><span class="pl-v">arguments</span>[<span class="pl-c1">1</span>]);<span class="pl-c1">3</span><span class="pl-k">==</span><span class="pl-v">arguments</span>.<span class="pl-c1">length</span><span class="pl-k">&amp;&amp;</span>(c<span class="pl-k">=</span><span class="pl-v">arguments</span>[<span class="pl-c1">1</span>],a<span class="pl-k">=</span><span class="pl-v">arguments</span>[<span class="pl-c1">2</span>]);a<span class="pl-k">&amp;&amp;</span>(c<span class="pl-k">=</span><span class="pl-en">E</span>(c,a[p]));c<span class="pl-k">=</span><span class="pl-en">z</span>(c);<span class="pl-k">var</span> d<span class="pl-k">=</span><span class="pl-en">F</span>(a,b,c);a<span class="pl-k">&amp;&amp;</span>(d<span class="pl-k">=</span>a);<span class="pl-k">if</span>(<span class="pl-k">!</span><span class="pl-k">--</span>B)<span class="pl-k">for</span>(;<span class="pl-c1">G</span>.<span class="pl-c1">length</span>;){<span class="pl-k">var</span> e<span class="pl-k">=</span><span class="pl-c1">G</span>.<span class="pl-c1">pop</span>();e<span class="pl-k">&amp;&amp;</span>(<span class="pl-en">e</span>(),<span class="pl-smi">e</span>.<span class="pl-smi">__DO</span>.<span class="pl-smi">throttleEvaluation</span><span class="pl-k">=</span><span class="pl-smi">e</span>.<span class="pl-smi">throttleEvaluation</span>)}d[p]<span class="pl-k">=</span><span class="pl-en">E</span>(d[p],c);<span class="pl-k">return</span> d}<span class="pl-k">catch</span>(f){<span class="pl-k">throw</span> B<span class="pl-k">=</span><span class="pl-c1">0</span>,f;}};<span class="pl-smi">f</span>.<span class="pl-en">fromJSON</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">b</span>){<span class="pl-k">var</span> c<span class="pl-k">=</span><span class="pl-smi">e</span>.<span class="pl-smi">utils</span>.<span class="pl-en">parseJson</span>(b);</td>
      </tr>
      <tr>
        <td id="L18" class="blob-num js-line-number" data-line-number="18"></td>
        <td id="LC18" class="blob-code blob-code-inner js-file-line"><span class="pl-v">arguments</span>[<span class="pl-c1">0</span>]<span class="pl-k">=</span>c;<span class="pl-k">return</span> <span class="pl-smi">f</span>.<span class="pl-smi">fromJS</span>.<span class="pl-c1">apply</span>(<span class="pl-v">this</span>,<span class="pl-v">arguments</span>)};<span class="pl-smi">f</span>.<span class="pl-en">updateFromJS</span><span class="pl-k">=</span><span class="pl-k">function</span>(){<span class="pl-k">throw</span> <span class="pl-en">Error</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>ko.mapping.updateFromJS, use ko.mapping.fromJS instead. Please note that the order of parameters is different!<span class="pl-pds">&quot;</span></span>);};<span class="pl-smi">f</span>.<span class="pl-en">updateFromJSON</span><span class="pl-k">=</span><span class="pl-k">function</span>(){<span class="pl-k">throw</span> <span class="pl-en">Error</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>ko.mapping.updateFromJSON, use ko.mapping.fromJSON instead. Please note that the order of parameters is different!<span class="pl-pds">&quot;</span></span>);};<span class="pl-smi">f</span>.<span class="pl-en">toJS</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">b</span>,<span class="pl-smi">c</span>){j<span class="pl-k">||</span><span class="pl-smi">f</span>.<span class="pl-en">resetDefaultOptions</span>();<span class="pl-k">if</span>(<span class="pl-c1">0</span><span class="pl-k">==</span><span class="pl-v">arguments</span>.<span class="pl-c1">length</span>)<span class="pl-k">throw</span> <span class="pl-en">Error</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>When calling ko.mapping.toJS, pass the object you want to convert.<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L19" class="blob-num js-line-number" data-line-number="19"></td>
        <td id="LC19" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>array<span class="pl-pds">&quot;</span></span><span class="pl-k">!==</span><span class="pl-smi">f</span>.<span class="pl-en">getType</span>(<span class="pl-smi">j</span>.<span class="pl-smi">ignore</span>))<span class="pl-k">throw</span> <span class="pl-en">Error</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>ko.mapping.defaultOptions().ignore should be an array.<span class="pl-pds">&quot;</span></span>);<span class="pl-k">if</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>array<span class="pl-pds">&quot;</span></span><span class="pl-k">!==</span><span class="pl-smi">f</span>.<span class="pl-en">getType</span>(<span class="pl-smi">j</span>.<span class="pl-smi">include</span>))<span class="pl-k">throw</span> <span class="pl-en">Error</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>ko.mapping.defaultOptions().include should be an array.<span class="pl-pds">&quot;</span></span>);<span class="pl-k">if</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>array<span class="pl-pds">&quot;</span></span><span class="pl-k">!==</span><span class="pl-smi">f</span>.<span class="pl-en">getType</span>(<span class="pl-smi">j</span>.<span class="pl-smi">copy</span>))<span class="pl-k">throw</span> <span class="pl-en">Error</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>ko.mapping.defaultOptions().copy should be an array.<span class="pl-pds">&quot;</span></span>);c<span class="pl-k">=</span><span class="pl-en">z</span>(c,b[p]);<span class="pl-k">return</span> <span class="pl-smi">f</span>.<span class="pl-en">visitModel</span>(b,<span class="pl-k">function</span>(<span class="pl-smi">a</span>){<span class="pl-k">return</span> <span class="pl-smi">e</span>.<span class="pl-smi">utils</span>.<span class="pl-en">unwrapObservable</span>(a)},c)};<span class="pl-smi">f</span>.<span class="pl-en">toJSON</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">b</span>,<span class="pl-smi">c</span>){<span class="pl-k">var</span> a<span class="pl-k">=</span><span class="pl-smi">f</span>.<span class="pl-en">toJS</span>(b,c);<span class="pl-k">return</span> <span class="pl-smi">e</span>.<span class="pl-smi">utils</span>.<span class="pl-en">stringifyJson</span>(a)};<span class="pl-smi">f</span>.<span class="pl-en">defaultOptions</span><span class="pl-k">=</span><span class="pl-k">function</span>(){<span class="pl-k">if</span>(<span class="pl-c1">0</span><span class="pl-k">&lt;</span><span class="pl-v">arguments</span>.<span class="pl-c1">length</span>)j<span class="pl-k">=</span></td>
      </tr>
      <tr>
        <td id="L20" class="blob-num js-line-number" data-line-number="20"></td>
        <td id="LC20" class="blob-code blob-code-inner js-file-line"><span class="pl-v">arguments</span>[<span class="pl-c1">0</span>];<span class="pl-k">else</span> <span class="pl-k">return</span> j};<span class="pl-smi">f</span>.<span class="pl-en">resetDefaultOptions</span><span class="pl-k">=</span><span class="pl-k">function</span>(){j<span class="pl-k">=</span>{include<span class="pl-k">:</span><span class="pl-smi">x</span>.<span class="pl-smi">include</span>.<span class="pl-c1">slice</span>(<span class="pl-c1">0</span>),ignore<span class="pl-k">:</span><span class="pl-smi">x</span>.<span class="pl-smi">ignore</span>.<span class="pl-c1">slice</span>(<span class="pl-c1">0</span>),copy<span class="pl-k">:</span><span class="pl-smi">x</span>.<span class="pl-smi">copy</span>.<span class="pl-c1">slice</span>(<span class="pl-c1">0</span>)}};<span class="pl-smi">f</span>.<span class="pl-en">getType</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">b</span>){<span class="pl-k">if</span>(b<span class="pl-k">&amp;&amp;</span><span class="pl-s"><span class="pl-pds">&quot;</span>object<span class="pl-pds">&quot;</span></span><span class="pl-k">===</span><span class="pl-k">typeof</span> b){<span class="pl-k">if</span>(<span class="pl-smi">b</span>.<span class="pl-c1">constructor</span><span class="pl-k">===</span><span class="pl-c1">Date</span>)<span class="pl-k">return</span><span class="pl-s"><span class="pl-pds">&quot;</span>date<span class="pl-pds">&quot;</span></span>;<span class="pl-k">if</span>(<span class="pl-smi">b</span>.<span class="pl-c1">constructor</span><span class="pl-k">===</span><span class="pl-c1">Array</span>)<span class="pl-k">return</span><span class="pl-s"><span class="pl-pds">&quot;</span>array<span class="pl-pds">&quot;</span></span>}<span class="pl-k">return</span> <span class="pl-k">typeof</span> b};<span class="pl-smi">f</span>.<span class="pl-en">visitModel</span><span class="pl-k">=</span><span class="pl-k">function</span>(<span class="pl-smi">b</span>,<span class="pl-smi">c</span>,<span class="pl-smi">a</span>){a<span class="pl-k">=</span>a<span class="pl-k">||</span>{};<span class="pl-smi">a</span>.<span class="pl-smi">visitedObjects</span><span class="pl-k">=</span><span class="pl-smi">a</span>.<span class="pl-smi">visitedObjects</span><span class="pl-k">||</span><span class="pl-k">new</span> <span class="pl-en">S</span>;<span class="pl-k">var</span> d,k<span class="pl-k">=</span><span class="pl-smi">e</span>.<span class="pl-smi">utils</span>.<span class="pl-en">unwrapObservable</span>(b);<span class="pl-k">if</span>(<span class="pl-en">P</span>(k))a<span class="pl-k">=</span><span class="pl-en">z</span>(a,k[p]),<span class="pl-en">c</span>(b,<span class="pl-smi">a</span>.<span class="pl-smi">parentName</span>),d<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&quot;</span>array<span class="pl-pds">&quot;</span></span><span class="pl-k">===</span><span class="pl-smi">f</span>.<span class="pl-en">getType</span>(k)<span class="pl-k">?</span>[]<span class="pl-k">:</span>{};<span class="pl-k">else</span> <span class="pl-k">return</span> <span class="pl-en">c</span>(b,<span class="pl-smi">a</span>.<span class="pl-smi">parentName</span>);<span class="pl-smi">a</span>.<span class="pl-smi">visitedObjects</span>.<span class="pl-en">save</span>(b,</td>
      </tr>
      <tr>
        <td id="L21" class="blob-num js-line-number" data-line-number="21"></td>
        <td id="LC21" class="blob-code blob-code-inner js-file-line">d);<span class="pl-k">var</span> l<span class="pl-k">=</span><span class="pl-smi">a</span>.<span class="pl-smi">parentName</span>;<span class="pl-en">Q</span>(k,<span class="pl-k">function</span>(<span class="pl-smi">b</span>){<span class="pl-k">if</span>(<span class="pl-k">!</span>(<span class="pl-smi">a</span>.<span class="pl-smi">ignore</span><span class="pl-k">&amp;&amp;</span><span class="pl-k">-</span><span class="pl-c1">1</span><span class="pl-k">!=</span><span class="pl-smi">e</span>.<span class="pl-smi">utils</span>.<span class="pl-en">arrayIndexOf</span>(<span class="pl-smi">a</span>.<span class="pl-smi">ignore</span>,b))){<span class="pl-k">var</span> j<span class="pl-k">=</span>k[b],g<span class="pl-k">=</span>a,h<span class="pl-k">=</span>l<span class="pl-k">||</span><span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>;<span class="pl-s"><span class="pl-pds">&quot;</span>array<span class="pl-pds">&quot;</span></span><span class="pl-k">===</span><span class="pl-smi">f</span>.<span class="pl-en">getType</span>(k)<span class="pl-k">?</span>l<span class="pl-k">&amp;&amp;</span>(h<span class="pl-k">+=</span><span class="pl-s"><span class="pl-pds">&quot;</span>[<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>b<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&quot;</span>]<span class="pl-pds">&quot;</span></span>)<span class="pl-k">:</span>(l<span class="pl-k">&amp;&amp;</span>(h<span class="pl-k">+=</span><span class="pl-s"><span class="pl-pds">&quot;</span>.<span class="pl-pds">&quot;</span></span>),h<span class="pl-k">+=</span>b);<span class="pl-smi">g</span>.<span class="pl-smi">parentName</span><span class="pl-k">=</span>h;<span class="pl-k">if</span>(<span class="pl-k">!</span>(<span class="pl-k">-</span><span class="pl-c1">1</span><span class="pl-k">===</span><span class="pl-smi">e</span>.<span class="pl-smi">utils</span>.<span class="pl-en">arrayIndexOf</span>(<span class="pl-smi">a</span>.<span class="pl-smi">copy</span>,b)<span class="pl-k">&amp;&amp;</span><span class="pl-k">-</span><span class="pl-c1">1</span><span class="pl-k">===</span><span class="pl-smi">e</span>.<span class="pl-smi">utils</span>.<span class="pl-en">arrayIndexOf</span>(<span class="pl-smi">a</span>.<span class="pl-smi">include</span>,b)<span class="pl-k">&amp;&amp;</span>k[p]<span class="pl-k">&amp;&amp;</span>k[p].<span class="pl-smi">mappedProperties</span><span class="pl-k">&amp;&amp;!</span>k[p].<span class="pl-smi">mappedProperties</span>[b]<span class="pl-k">&amp;&amp;</span>k[p].<span class="pl-smi">copiedProperties</span><span class="pl-k">&amp;&amp;!</span>k[p].<span class="pl-smi">copiedProperties</span>[b]<span class="pl-k">&amp;&amp;</span><span class="pl-s"><span class="pl-pds">&quot;</span>array<span class="pl-pds">&quot;</span></span><span class="pl-k">!==</span><span class="pl-smi">f</span>.<span class="pl-en">getType</span>(k)))<span class="pl-k">switch</span>(<span class="pl-smi">f</span>.<span class="pl-en">getType</span>(<span class="pl-smi">e</span>.<span class="pl-smi">utils</span>.<span class="pl-en">unwrapObservable</span>(j))){<span class="pl-k">case</span> <span class="pl-s"><span class="pl-pds">&quot;</span>object<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-k">case</span> <span class="pl-s"><span class="pl-pds">&quot;</span>array<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-k">case</span> <span class="pl-s"><span class="pl-pds">&quot;</span>undefined<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>g<span class="pl-k">=</span><span class="pl-smi">a</span>.<span class="pl-smi">visitedObjects</span>.<span class="pl-en">get</span>(j);</td>
      </tr>
      <tr>
        <td id="L22" class="blob-num js-line-number" data-line-number="22"></td>
        <td id="LC22" class="blob-code blob-code-inner js-file-line">d[b]<span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&quot;</span>undefined<span class="pl-pds">&quot;</span></span><span class="pl-k">!==</span><span class="pl-smi">f</span>.<span class="pl-en">getType</span>(g)<span class="pl-k">?</span>g<span class="pl-k">:</span><span class="pl-smi">f</span>.<span class="pl-en">visitModel</span>(j,c,a);<span class="pl-k">break</span>;<span class="pl-k">default</span><span class="pl-k">:</span>d[b]<span class="pl-k">=</span><span class="pl-en">c</span>(j,<span class="pl-smi">a</span>.<span class="pl-smi">parentName</span>)}}});<span class="pl-k">return</span> d}});</td>
      </tr>
</table>

  </div>

</div>

<button type="button" data-facebox="#jump-to-line" data-facebox-class="linejump" data-hotkey="l" class="hidden">Jump to Line</button>
<div id="jump-to-line" style="display:none">
  <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="" class="js-jump-to-line-form" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <input class="form-control linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
    <button type="submit" class="btn">Go</button>
</form></div>

  </div>
  <div class="modal-backdrop"></div>
</div>


    </div>
  </div>

    </div>

        <div class="container site-footer-container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links right">
        <li><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
      <li><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>

    </ul>

    <a href="https://github.com" aria-label="Homepage" class="site-footer-mark" title="GitHub">
      <svg aria-hidden="true" class="octicon octicon-mark-github" height="24" version="1.1" viewBox="0 0 16 16" width="24"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
</a>
    <ul class="site-footer-links">
      <li>&copy; 2016 <span title="0.20074s from github-fe127-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact</a></li>
        <li><a href="https://help.github.com" data-ga-click="Footer, go to help, text:help">Help</a></li>
    </ul>
  </div>
</div>



    

    <div id="ajax-error-message" class="ajax-error-message flash flash-error">
      <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"></path></svg>
      <button type="button" class="flash-close js-flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
        <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"></path></svg>
      </button>
      Something went wrong with that request. Please try again.
    </div>


      
      <script crossorigin="anonymous" integrity="sha256-H/wQaIswgx1fjQmwbl6otzGw3AuikscKgmQirpYJF50=" src="https://assets-cdn.github.com/assets/frameworks-1ffc10688b30831d5f8d09b06e5ea8b731b0dc0ba292c70a826422ae9609179d.js"></script>
      <script async="async" crossorigin="anonymous" integrity="sha256-BKq9Vegvfcarm+CKWMu3ilxnyJJX4KmWZCuW0DSaqhE=" src="https://assets-cdn.github.com/assets/github-04aabd55e82f7dc6ab9be08a58cbb78a5c67c89257e0a996642b96d0349aaa11.js"></script>
      
      
      
      
      
      
    <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner hidden">
      <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"></path></svg>
      <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
      <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
    </div>
    <div class="facebox" id="facebox" style="display:none;">
  <div class="facebox-popup">
    <div class="facebox-content" role="dialog" aria-labelledby="facebox-header" aria-describedby="facebox-description">
    </div>
    <button type="button" class="facebox-close js-facebox-close" aria-label="Close modal">
      <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"></path></svg>
    </button>
  </div>
</div>

  </body>
</html>

