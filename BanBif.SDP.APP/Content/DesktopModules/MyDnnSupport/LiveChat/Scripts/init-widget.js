var mydnnLiveChatBaseData;
(function ($, Sys) {
    $(document).ready(function () {
        var __mydnnLiveChatRequests = [];
        var __isAgentOnline = false;
        var __isLiveChatLoaded = false;
        var __isAngularLoaded = false;
        var __requestsString;
        var __adminPanelUrl;
        var __portalID;
        var __me = this;
        var __counter = 0;

        if (typeof mydnnSupportLiveChat != "undefined" || getParameterByName("popUp") == "true") return;

        var __siteRoot = "/";
        var __tabID = -1;
        if (typeof dnn != "undefined" && typeof dnn.getVar != "undefined") {
            __siteRoot = dnn.getVar("sf_siteRoot", "/");
            __tabID = dnn.getVar("sf_tabId", -1)
        }

        setTimeout(function () {
            $.ajax({
                type: "GET",
                url: __siteRoot + "DesktopModules/MyDnnSupport.LiveChat/API/VisitorService/DetectLiveChat",
                data: { currentTabID: __tabID }
            }).done(function (data) {
                __siteRoot = data.SiteRoot;
                __portalID = data.PortalID;

                if (data.LiveChatEnabled) {
                    mydnnLiveChatBaseData = { SiteRoot: __siteRoot };

                    $('body').append('<link href="' + __siteRoot + 'DesktopModules/MyDnnSupport/LiveChat/Templates/' + data.LiveChatTemplate + '/style.css?cdv=200" type="text/css" rel="stylesheet"/>');

                    __me.loadSignalRScripts(data);
                }
            }).error(function (request, status, error) {
                console.log(request.responseText);
            });
        }, 1000);

        this.loadSignalRScripts = function (data) {
            if (typeof $.signalR == "undefined")
                $.getScript(__siteRoot + "DesktopModules/MyDnnSupport/LiveChat/ClientComponents/signalr/jquery.signalR-2.1.1.min.js", function () {
                    $.getScript(data.SiteRoot + "signalr/hubs");
                    __me.loadAngularAndScripts(data);
                });
            else
                __me.loadAngularAndScripts(data);
        }

        this.loadAngularAndScripts = function (data) {
            if (typeof angular == "undefined")
                $.getScript(__siteRoot + "DesktopModules/MyDnnSupport/LiveChat/ClientComponents/angularjs/angular.min.js", function () {
                    __me.loadLiveChatScripts(data);
                });
            else
                __me.loadLiveChatScripts(data);
        }

        this.loadLiveChatScripts = function (data) {
            $.getScript(__siteRoot + "DesktopModules/MyDnnSupport/LiveChat/ClientApp/Services/signalr.service.js?cdv=200", function () {
                $.getScript(__siteRoot + "DesktopModules/MyDnnSupport/LiveChat/ClientApp/Services/ng-mydnn-services.js?cdv=200", function () {
                    $.getScript(__siteRoot + "DesktopModules/MyDnnSupport/LiveChat/ClientComponents/moment.js/moment.min.js", function () {
                        $.getScript(__siteRoot + "DesktopModules/MyDnnSupport/LiveChat/ClientApp/Controllers/livechat-visitor-controller.js?cdv=200", function () {
                            $('body').append('<div id="mydnnSupportLiveChat" ng-app="MyDnnSupportLiveChatApp" style="display:none;"><div ng-controller="livechatController"><div id="mydnnLiveChatWidget" dynamic="WidgetHtml" ng-show="!livechat.WidgetMinimized"></div><div id="mydnnLiveChatMinButton" dynamic="MinButtonHtml" ng-show="livechat.WidgetMinimized" ng-click="onMinButtonClick()"></div></div></div>');
                            angular.bootstrap(document.getElementById('mydnnSupportLiveChat'), ['MyDnnSupportLiveChatApp']);
                        });
                    });
                });
            });
        }

        function getParameterByName(name) {
            name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
            var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
                results = regex.exec(location.search);
            return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
        }
    });
}(jQuery, window.Sys));
