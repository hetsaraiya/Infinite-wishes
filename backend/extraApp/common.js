"use strict";
function processData(e) {
    var t = {};
    return jQuery.each(e, function(e, i) {
        t[i.name] = i.value
    }),
    JSON.stringify(t)
}
function enableForm(e) {}
function disableForm(e) {}
function formatDate(e) {
    console.log("inside apijs");
    var t = e.split("-")
      , i = t[1] + " " + t[0] + ", " + t[2]
      , s = new Date(i)
      , e = s.getDate();
    e < 10 && (e = "0" + e),
    e = e.toString();
    var o = s.getFullYear().toString()
      , n = s.getMonth() + 1;
    return n < 10 && (n = "0" + n),
    n = n.toString(),
    o + "" + n + e
}
function mergeCart() {
    if ($(".pdp-mail-container").hasClass("open")) {
        $(".maillist input.mail-id:disabled").each(function(e, t) {
            $(this).attr("value", $(this).val())
        });
        var e = $(".maillist").html();
        return sessionStorage.setItem("mergecart", !0),
        sessionStorage.setItem("maillist", e),
        void location.reload(!0)
    }
    $("#acc-menu").removeClass("is-active"),
    $("body").removeClass("has-active-menu"),
    window.setTimeout(function() {
        $("#u-mask").removeClass("is-active")
    }, 500),
    document.cookie = "m-cart=1",
    $("#m-mask").addClass("is-active"),
    $("#m-cart-container").addClass("active")
}
function registerResendOTP() {
    console.log("register logger"),
    $("#resend-otp-1").on("click", function(e) {
        console.log("resend otp"),
        $("#otp-enter .submit_msg").removeClass("has_error").hide();
        var t = {
            email: $("#otp-enter .r-pass-email").text()
        };
        return $.ajax({
            url: "/api/otplogin/generate",
            method: "POST",
            dataType: "json",
            data: JSON.stringify(t),
            contentType: "application/json; charset=UTF-8",
            processData: !1,
            beforeSend: function() {
                $(".login-overlay").addClass("active"),
                NProgress.start()
            }
        }).done(function(e) {
            $(".login-overlay").removeClass("active"),
            NProgress.done(),
            "Success" === e.status && e.data.l ? ($(".submit_msg").css("display", "block"),
            $("#otp-enter .submit_msg").text("OTP sent successfully to " + e.data.user.email + " and " + e.data.user.mob),
            $("#otp-enter .submit_msg").removeClass("has_error").addClass("has_success")) : ($(".submit_msg").css("display", "block"),
            $("#otp-enter .submit_msg").text(responseCodeToText(e.data.msg)),
            $("#otp-enter .submit_msg").removeClass("has_success").addClass("has_error"))
        }),
        !1
    })
}
var signUpEmail, newtestvar = "tempForBuild0119", tempForBuild = "tempForBuild0119";
$(document).ready(function() {
    function e(e) {
        return !!/^[7-9][0-9]{9}$/.test(e)
    }
    $(document).on("submit", "#login-email-form", function(t) {
        $("#login-email .submit_msg").removeClass("has_error").hide(),
        $("#login-email input").removeClass("error");
        var i = processData($(this).serializeArray());
        i = JSON.parse(i),
        i.email = i.email.trim();
        var s, o = "/login", n = $("#com-e-m-field").val().trim(), a = i.email;
        return s = $.fn.fmValidate.checkType(n),
        "mobile" === s && (delete i.email,
        i.mob = n),
        s ? $.fn.fmValidate.init("#login-email-form") && $.ajax({
            url: o,
            method: "POST",
            dataType: "json",
            data: JSON.stringify(i),
            contentType: "application/json; charset=UTF-8",
            processData: !1,
            beforeSend: function() {
                $(".login-overlay").addClass("active"),
                NProgress.start()
            }
        }).done(function(t) {
            NProgress.done(),
            $(".login-overlay").removeClass("active"),
            "Success" === t.status && t.data.l ? (dataLayer.push({
                event: "login",
                mode: "Password",
                email: a
            }),
            t.data.user.mcart ? mergeCart() : (document.cookie = "m-cart=0",
            history.pushState(null, null, "#"),
            location.reload(!0)),
            "" !== getCookie("mailShareLogin") && setCookie("mailShareLogin", "1", 6e5)) : (t.data.textMsg = responseCodeToText(t.data.msg),
            "113" === t.data.msg ? $("#login-email-form #com-e-m-field").addClass("error") : "112" === t.data.msg && $("#login-email-form input").addClass("error"),
            e($("#login-email-form #com-e-m-field").val().trim()) && t.data.msg,
            $("#login-email .submit_msg").show().text(t.data.textMsg).addClass("has_error"))
        }) : ($("#com-e-m-field").addClass("error"),
        $("#com-e-m-field").next("label").find(".error-msg").text("Please enter a valid email address")),
        !1
    }),
    $(document).on("focus focusout", ".boxed-form .off-c-field input", function(e) {
        "focusin" == e.type ? $(this).parent().find("label").removeClass("active-length").addClass("active") : $(this).val().length > 0 ? $(this).parent().find("label").removeClass("active").addClass("active-length") : ($(this).parent().find("label").removeClass("active-length active"),
        $(this).hasClass("datepicker") && $(this).parent().find("label").addClass("active-length"))
    }),
    $(document).on("submit", "#sign-up-form", function(e) {
        e.preventDefault(),
        $("#sign-up-1 .submit_msg").removeClass("has_error").hide(),
        $("#sign-up-1 input").removeClass("error");
        var i = JSON.parse(processData($(this).find("select, textarea, input[name != cname]").serializeArray()));
        return i.newsletter = "on" == i.newsl ? 1 : 0,
        delete i.newsl,
        signUpEmail = i.email,
        $.fn.fmValidate.init("#sign-up-form") && $.ajax({
            url: "/signup",
            method: "POST",
            dataType: "json",
            data: JSON.stringify(i),
            contentType: "application/json; charset=UTF-8",
            processData: !1,
            beforeSend: function() {
                $(".login-overlay").addClass("active"),
                NProgress.start()
            }
        }).done(function(e) {
            $(".login-overlay").removeClass("active"),
            NProgress.done(),
            "Success" === e.status && e.data.l ? (dataLayer.push({
                event: "signup",
                mode: "Password",
                step: "1",
                email: signUpEmail
            }),
            $("#sign-up-2").find("span.error-msg").text(""),
            $("#sign-up-2").find("input").removeClass("error"),
            t("sign-up-1", "sign-up-2")) : (e.data.textMsg = responseCodeToText(e.data.msg),
            $("#sign-up-1 .submit_msg").show().text(e.data.textMsg).addClass("has_error"))
        }),
        !1
    }),
    $(document).on("submit", "#sign-up-form-2", function(e) {
        $("#sign-up-2 .submit_msg").removeClass("has_error").hide(),
        $("#sign-up-2 input").removeClass("error");
        var t = processData($(this).serializeArray());
        return t = JSON.parse(t),
        t.dob ? t.dob = formatDate(t.dob) : delete t.dob,
        e.preventDefault(),
        $.fn.fmValidate.init("#sign-up-form-2") && $.ajax({
            url: "/updateProfile",
            method: "POST",
            dataType: "json",
            data: JSON.stringify(t),
            contentType: "application/json; charset=UTF-8",
            processData: !1,
            beforeSend: function() {
                $(".login-overlay").removeClass("active"),
                NProgress.done()
            }
        }).done(function(e) {
            $(".login-overlay").removeClass("active"),
            NProgress.done(),
            "Success" === e.status && e.data.l ? (dataLayer.push({
                event: "signup",
                mode: "Password",
                step: "2",
                email: signUpEmail
            }),
            history.pushState(null, null, "#"),
            location.reload(!0),
            "" !== getCookie("mailShareLogin") && setCookie("mailShareLogin", "1", 6e5),
            smartech("contact", "3", {
                "pk^email": e.data.user.email,
                mobile: e.data.user.mob,
                FIRST_NAME: e.data.user.fname,
                LAST_NAME: e.data.user.lname
            })) : (e.data.textMsg = responseCodeToText(e.data.msg),
            $("#sign-up-2 .submit_msg").show().text(e.data.textMsg).addClass("has_error"))
        }),
        !1
    }),
    $(document).on("submit", "#otp-login-form", function(e) {
        $("#otp-login .submit_msg").removeClass("has_error").removeClass("has_success").hide(),
        $("#otp-login input").removeClass("error");
        var i = processData($(this).serializeArray());
        i = JSON.parse(i);
        var s, o = $("#otp-email").val();
        return (s = $.fn.fmValidate.checkType(o)) && "mobile" !== s ? ($.fn.fmValidate.init("#otp-login-form") && $.ajax({
            url: "/api/otplogin/generate",
            method: "POST",
            data: JSON.stringify(i),
            contentType: "application/json; charset=UTF-8",
            processData: !1,
            beforeSend: function() {
                $(".login-overlay").addClass("active"),
                NProgress.start()
            }
        }).done(function(e) {
            $(".login-overlay").removeClass("active"),
            NProgress.done(),
            "Success" === e.status && e.data.l ? ($("#otp-login .submit_msg").show().text("Email Sent Successfully ,Please Check your MailBox.").removeClass("has_error").addClass("has_success"),
            $(".submit_msg").css("display", "block"),
            $("#otp-enter .submit_msg").text("We have sent an OTP to " + e.data.user.email + " and " + e.data.user.mob + ". Enter the OTP below to login."),
            $("#otp-enter .r-pass-email").text(o),
            $("#otp-enter-form").find("span.error-msg").text(""),
            $("#otp-enter-form").find("input").removeClass("error"),
            $("#otp-enter-field input").val(""),
            $("#nav-back").addClass("hide"),
            t("otp-login", "otp-enter"),
            $(".sign-up-text").data("source", "otp-enter")) : (e.data.textMsg = responseCodeToText(e.data.msg),
            $("#otp-login .submit_msg").show().text(e.data.textMsg).addClass("has_error"))
        }),
        !1) : ($("#otp-login-form #otp-email").addClass("error"),
        $("#otp-login-form #otp-email").next("label").find(".error-msg").text("Please enter a valid email address"),
        !1)
    }),
    $(document).on("submit", "#otp-enter-form", function(e) {
        $("#otp-enter .submit_msg").hide().removeClass("has_error"),
        $("#otp-enter input").removeClass("error");
        var t = $("#otp-enter .r-pass-email").text() || "abdul.jailany@igp.com";
        t = $.trim(t);
        var i = $.fn.fmValidate.checkType(t)
          , s = $.trim($("#otp-enter-field").val())
          , o = {};
        return o.email = t,
        o.loginotp = s,
        "mobile" === i && (delete o.email,
        o.mob = t),
        $.fn.fmValidate.init("#otp-enter-form") && $.ajax({
            url: "/api/otplogin/verify",
            method: "POST",
            dataType: "JSON",
            data: JSON.stringify(o),
            contentType: "application/json; charset=UTF-8",
            processData: !1,
            beforeSend: function() {
                $(".login-overlay").addClass("active"),
                NProgress.start()
            }
        }).done(function(e) {
            $(".login-overlay").removeClass("active"),
            NProgress.done(),
            "Success" === e.status && e.data.l ? (dataLayer.push({
                event: "login",
                mode: "OTP",
                email: o.email
            }),
            e.data.user.mcart ? mergeCart() : (document.cookie = "m-cart=0",
            history.pushState(null, null, "#"),
            location.reload(!0)),
            "" !== getCookie("mailShareLogin") && setCookie("mailShareLogin", "1", 6e5)) : (e.data.textMsg = responseCodeToText(e.data.msg),
            $("#otp-enter .submit_msg").show().text(e.data.textMsg).addClass("has_error"))
        }),
        !1
    }),
    $(document).on("submit", "#f-pass-form", function(e) {
        $("#f-pass .submit_msg").removeClass("has_error").hide(),
        $("#f-pass .submit_msg").removeClass("has_success").hide(),
        $("#f-pass input").removeClass("error");
        var i = processData($(this).serializeArray());
        i = JSON.parse(i);
        var s, o = $("#f-email").val();
        return s = $.fn.fmValidate.checkType(o),
        "mobile" === s && (delete i.email,
        i.mob = o),
        s ? ($.fn.fmValidate.init("#f-pass-form") && $.ajax({
            url: "/forgotPswd",
            method: "POST",
            data: JSON.stringify(i),
            contentType: "application/json; charset=UTF-8",
            processData: !1,
            beforeSend: function() {
                $(".login-overlay").addClass("active"),
                NProgress.start()
            }
        }).done(function(e) {
            $(".login-overlay").removeClass("active"),
            NProgress.done(),
            "Success" === e.status && e.data.l ? ($("#f-pass .submit_msg").show().text("Email Sent Successfully ,Please Check your MailBox.").removeClass("has_error").addClass("has_success"),
            $("#r-pass .r-pass-email").text(o),
            $("#otp-form").find("span.error-msg").text(""),
            $("#otp-form").find("input").removeClass("error"),
            $("#otp-form input").val(""),
            $("#nav-back").addClass("hide"),
            t("f-pass", "r-pass"),
            $(".sign-up-text").data("source", "r-pass")) : (e.data.textMsg = responseCodeToText(e.data.msg),
            $("#f-pass .submit_msg").show().text(e.data.textMsg).addClass("has_error"))
        }),
        !1) : ($("#f-pass-form #f-email").addClass("error"),
        $("#f-pass-form #f-email").next("label").find(".error-msg").text("Please enter a valid email address"),
        !1)
    });
    var t = function(e, t) {
        $("#" + e).addClass("left"),
        $("#" + t).removeClass("left right"),
        $("#" + t).data("backbutton") ? $("#nav-back").removeClass("hide") : $("#nav-back").addClass("hide"),
        "otp-enter" === t && $("#resend-otp-1").on("click", function(e) {
            $("#otp-enter .submit_msg").removeClass("has_error").hide();
            var t = {
                email: $("#otp-enter .r-pass-email").text()
            };
            return $.ajax({
                url: "/api/otplogin/generate",
                method: "POST",
                dataType: "json",
                data: JSON.stringify(t),
                contentType: "application/json; charset=UTF-8",
                processData: !1,
                beforeSend: function() {
                    $(".login-overlay").addClass("active"),
                    NProgress.start()
                }
            }).done(function(e) {
                $(".login-overlay").removeClass("active"),
                NProgress.done(),
                "Success" === e.status && e.data.l ? ($(".submit_msg").css("display", "block"),
                $("#otp-enter .submit_msg").text("OTP sent successfully to " + e.data.user.email + " and " + e.data.user.mob),
                $("#otp-enter .submit_msg").removeClass("has_error").addClass("has_success")) : ($(".submit_msg").css("display", "block"),
                $("#otp-enter .submit_msg").text(responseCodeToText(e.data.msg)),
                $("#otp-enter .submit_msg").removeClass("has_success").addClass("has_error"))
            }),
            !1
        })
    };
    $(".resend").on("click", function() {
        $.ajax({
            url: "/sendVerifyEmail?q=" + $("#user-data").data("userid"),
            method: "GET",
            dataType: "json",
            contentType: "application/json; charset=UTF-8",
            processData: !1,
            beforeSend: function() {
                $(".login-overlay").addClass("active"),
                NProgress.start()
            }
        }).done(function(e) {
            if ($(".login-overlay").removeClass("active"),
            NProgress.done(),
            "Success" === e.status) {
                history.pushState(null, null, "#");
                var t = $("#uemail1").val();
                $(".verifyText")[0].innerText = "Verification link has been sent again to " + t + ". Please click on the verification link to proceed.",
                $(".verifyText")[0].style.marginRight = "auto",
                $(".resendSpan").remove()
            }
        })
    })
}),
function() {
    var e = !1;
    $("#otp").on("keyup", function() {
        6 == $(this).val().length ? e && (e = !1,
        "".abort()) : $(this).removeClass("correct incorrect")
    }),
    $(document).on("submit", "#r-pass-form", function(e) {
        var t = this
          , i = processData($(t).serializeArray())
          , s = JSON.parse(i);
        if ($("#r-pass-2 .submit_msg").removeClass("has_error").hide(),
        $("#r-pass-2 input").removeClass("error"),
        validatePassword($("#r-pass-form").find("#r-passwd").val())) {
            if ($.fn.fmValidate.init("#r-pass-form")) {
                if ("" === s.passwd.trim())
                    return $("#r-pass-2 .submit_msg").addClass("has_error").text("Password cann't be empty string").show(),
                    $("#r-pass-2 input[name=passwd]").addClass("error"),
                    !1;
                if (s.passwd !== s.cnfrmpswrd)
                    return $("#r-pass-2 .submit_msg").addClass("has_error").text("New Password and Confirm Password doesn't match").show(),
                    $("#r-pass-2 input").addClass("error"),
                    !1;
                delete s.cnfrmpswrd,
                s.tok = $("#otp").val(),
                s.email = $("#r-pass-2 .r-pass-email").text(),
                $.ajax({
                    url: "/changePswd",
                    method: "POST",
                    dataType: "json",
                    data: JSON.stringify(s),
                    contentType: "application/json; charset=UTF-8",
                    processData: !1,
                    beforeSend: function() {
                        $(".login-overlay").addClass("active"),
                        NProgress.start()
                    }
                }).done(function(e) {
                    $(".login-overlay").removeClass("active"),
                    NProgress.done(),
                    "Success" === e.status && e.data.l ? (history.pushState(null, null, "#"),
                    location.reload(!0)) : (e.data.textMsg = responseCodeToText(e.data.msg),
                    $("#r-pass .submit_msg").show().text(e.data.textMsg).addClass("has_error"))
                })
            } else
                $("#r-pass .submit_msg").show().text("Invalid Password").addClass("has_error");
            return !1
        }
        var o = document.querySelector("#r-pass-form #r-passwd");
        return o.setCustomValidity("The password should have a minimum of 6 characters."),
        o.reportValidity(),
        !1
    })
}(),
$(document).on("click", "#resendOtp", function(e) {
    $("#r-pass .submit_msg").removeClass("has_error").hide();
    var t = {
        email: $("#f-email").val().trim()
    }
      , i = $(this).data("url") ? $(this).data("url") : "/forgotPswd";
    return $.ajax({
        url: i,
        method: "POST",
        dataType: "json",
        data: JSON.stringify(t),
        contentType: "application/json; charset=UTF-8",
        processData: !1,
        beforeSend: function() {
            $(".login-overlay").addClass("active"),
            NProgress.start()
        }
    }).done(function(e) {
        $(".login-overlay").removeClass("active"),
        NProgress.done(),
        "Success" === e.status && e.data.l ? $(".has_success").removeClass("hide").text("OTP sent successfully to your Email Id") : (e.data.textMsg = responseCodeToText(e.data.msg),
        $(".has_error").removeClass("hide").text(e.data.textMsg))
    }),
    !1
});
;"use strict";
function handleIntersection(e) {
    e.map(e=>{
        e.isIntersecting ? ($(".igp-rebrand-breadcrumb").addClass("hide"),
        $(".primary-cta-wrapper").removeClass("active"),
        $("#scroll-container").css("margin-bottom", "0px")) : ($(".igp-rebrand-breadcrumb").removeClass("hide"),
        $(".primary-cta-wrapper").addClass("active"),
        $("#scroll-container").css("margin-bottom", "60px"))
    }
    )
}
function initPdpPageScrollHandler() {
    if ("IntersectionObserver"in window) {
        var e = document.querySelector(".pdp-scroll-handler");
        e && observer.observe(e)
    }
}
function debounce(e, t, i) {
    let s;
    return function() {
        let o = this
          , n = arguments
          , a = function() {
            s = null,
            i || e.apply(o, n)
        }
          , r = i && !s;
        clearTimeout(s),
        s = setTimeout(a, t),
        r && e.apply(o, n)
    }
}
function gaProdRemoveCart(e) {
    if (dataLayer && dataLayer.constructor === Array) {
        var t = {
            event: "removeFromCart",
            ecommerce: {
                currencyCode: "INR",
                remove: {
                    products: [e]
                }
            }
        };
        dataLayer.push(t)
    }
}
function pushDataLayer(e) {
    dataLayer && dataLayer.constructor === Array && dataLayer.push(e)
}
function gaProductDetail(e, t, i, s) {
    return {
        name: e,
        id: t,
        price: i,
        brand: "",
        category: "",
        variant: "",
        quantity: s
    }
}
function ObjToArray(e) {
    var t = [];
    for (var i in e)
        t.push(e[i]);
    return t
}
function dynamicSort(e) {
    var t = 1;
    return "-" === e[0] && (t = -1,
    e = e.substr(1)),
    function(i, s) {
        return (i[e] < s[e] ? -1 : i[e] > s[e] ? 1 : 0) * t
    }
}
function loadSvgIcons() {
    $(".cat-mm-icon-wrapper, .sub-cat-img, .icon-wrapper.rec-i-wrapper, .icon-wrapper.hover-icon-wrapper").each(function() {
        var e = $(this).data("href");
        e && $(this).html('<svg viewBox="0 0 2 2" class="s-icon"><use xlink:href = "' + e + '"></use></svg>')
    })
}
function getDataOnScroll() {
    getCountryCity(),
    getRecentlyViewedData(),
    $(window).off("scroll", getDataOnScroll)
}
function getCountryCity() {
    console.log("getting country city"),
    sessionStorage.getItem("ccdataFlag") || "prod-des" == $("body").data("page") || $.ajax({
        url: "/api/ccdata",
        method: "GET",
        cache: !0,
        contentType: "application/json; charset=UTF-8",
        success: function(e, t, i) {
            sessionStorage.setItem("ccdataFlag", "true"),
            sessionStorage.setItem("ccdata", JSON.stringify(e))
        }
    })
}
function getRecentlyViewedData() {
    console.log("recently view called"),
    5 != $("body").data("stid") && 1671 != $("body").data("stid") && 830 != $("body").data("stid") && 1666 != $("body").data("stid") || "cart" === pgtype || "checkout" === pgtype || location.pathname.indexOf("all-about-igp") != -1 || location.pathname.indexOf("contact-us") != -1 || location.pathname.indexOf("smartbuy") != -1 || location.pathname.indexOf("igp-select") != -1 || location.pathname.indexOf("smartbuypayzapp") != -1 || location.pathname.indexOf("editprofile") != -1 || location.pathname.indexOf("myaddressbook") != -1 || location.pathname.indexOf("reminders") != -1 || $.ajax({
        url: "/api/recentlyview",
        method: "GET",
        async: !1,
        cache: !0,
        contentType: "application/json; charset=UTF-8",
        beforeSend: function(e) {},
        success: function(e, t, i) {
            $("#recViewed").removeClass("hidden"),
            $("#recViewed").html(e),
            sessionStorage.setItem("recentlyviewed", "true"),
            $(".hp-re").length ? ($(".trending-products-carousel2:last").parent().css("margin", "0px 42px"),
            $(".trending-products-carousel2:last").parent().parent().css("padding", "0px"),
            $(".trending-products-carousel2:last").parent().parent().css("padding", "0px 0px"),
            $(".trending-products-carousel2:last").parent().parent().parent().removeClass("bg-dark"),
            $(".trending-products-carousel2:last").parent().parent().parent().css("margin-top", "40px"),
            $(".trending-products-carousel2:last").parent().parent().prev().removeClass("section-title bg-light"),
            $(".trending-products-carousel2:last").parent().parent().prev().addClass("hdr-ttl"),
            $(".trending-products-carousel2:last").parent().parent().prev().css("margin", "0px"),
            $(".trending-products-carousel2:last").parent().parent().prev().css("padding", "0px 0px 24px 0px"),
            $(".trending-products-carousel2:last").parent().parent().prev().children().removeClass("grand-title pt-allign"),
            $(".trending-products-carousel2:last").parent().parent().prev().children().css("padding-left", "48px"),
            $(".trending-products-carousel2:last").slick({
                infinite: !0,
                slidesToShow: 4,
                slidesToScroll: 4,
                accessibility: !1,
                dots: !1,
                arrows: !1
            }).show(),
            $(".trending-products-carousel2").find(".slick-list.draggable").css("z-index", 1),
            $(".trending-products-carousel2").find(".product-item-revamp").css("border", "solid 1px #cbd5e1"),
            !$(".trending-products-carousel2:last").find(".wg-nav-btn-crl").length && $(".trending-products-carousel2:last").find(".product-grid-item-revamp").length > 4 && ($(".trending-products-carousel2:last").append(`<div class="wg-nav-btn-crl">
                            <div class="button-container button-left">
                                <svg xmlns="http://www.w3.org/2000/svg" width="85" height="170" viewBox="0 0 48 120" fill="none">
                                    <g filter="url(#a)">
                                        <path
                                            d="m25.68 32.544-5.024-3.036A20 20 0 0 1 11 12.391v94.624a20 20 0 0 1 9.656-17.117l5.023-3.036a31.733 31.733 0 0 0 0-54.318z"
                                            fill="#fff" />
                                        <path d="m28 53-6 7 6 7" stroke="#94a3b8" stroke-width="2" />
                                    </g>
                                    <defs>
                                        <filter id="a" x="0" y="-9" width="50" height="138" filterUnits="userSpaceOnUse"
                                            color-interpolation-filters="sRGB">
                                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                            <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                result="hardAlpha" />
                                            <feOffset dx="-2" />
                                            <feGaussianBlur stdDeviation="4.5" />
                                            <feComposite in2="hardAlpha" operator="out" />
                                            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
                                            <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_488_33497" />
                                            <feBlend in="SourceGraphic" in2="effect1_dropShadow_488_33497" result="shape" />
                                        </filter>
                                    </defs>
                                </svg>
                            </div>
                            <div class="button-container button-right">
                                <svg xmlns="http://www.w3.org/2000/svg" width="85" height="170" viewBox="0 0 48 120" fill="none">
                                    <g filter="url(#a)">
                                        <path
                                            d="m26.32 32.544 5.024-3.036A20 20 0 0 0 41 12.391v94.624a20 20 0 0 0-9.656-17.117l-5.023-3.036a31.733 31.733 0 0 1 0-54.318z"
                                            fill="#fff" />
                                        <path d="m24 53 6 7-6 7" stroke="#94a3b8" stroke-width="2" />
                                    </g>
                                    <defs>
                                        <filter id="a" x="-2" y="-9" width="50" height="138" filterUnits="userSpaceOnUse"
                                            color-interpolation-filters="sRGB">
                                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                            <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                result="hardAlpha" />
                                            <feOffset dx="-2" />
                                            <feGaussianBlur stdDeviation="4.5" />
                                            <feComposite in2="hardAlpha" operator="out" />
                                            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
                                            <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_488_33491" />
                                            <feBlend in="SourceGraphic" in2="effect1_dropShadow_488_33491" result="shape" />
                                        </filter>
                                    </defs>
                                </svg>
                            </div>
                        </div>`),
            $(".trending-products-carousel2:last .button-left").on("click", function() {
                $(".trending-products-carousel2:last").slick("slickPrev")
            }),
            $(".trending-products-carousel2:last .button-right").on("click", function() {
                $(".trending-products-carousel2:last").slick("slickNext")
            }))) : $(".trending-products-carousel2:last").slick({
                infinite: !0,
                slidesToShow: 4,
                slidesToScroll: 4,
                accessibility: !1,
                dots: !1,
                arrows: !0
            })
        },
        error: function(e) {
            console.log("error : " + JSON.stringify(e))
        }
    })
}
function getSignUpTemplate(e) {
    var t = "all";
    "label" == $("body").data("page") && (t = "label"),
    $.ajax({
        url: "/h/signUpTemplate",
        method: "POST",
        data: JSON.stringify({
            page: t
        }),
        cache: !0,
        contentType: "application/json; charset=UTF-8",
        beforeSend: function(e) {},
        success: function(t, i, s) {
            e(t)
        },
        error: function(e) {
            console.log("error : " + JSON.stringify(e))
        }
    })
}
function getDefaultSearchTemplate(e) {
    $(".hp-re") || $.ajax({
        url: "/h/searchTemplate",
        method: "POST",
        async: !0,
        cache: !0,
        contentType: "application/json; charset=UTF-8",
        beforeSend: function(e) {},
        success: function(t, i, s) {
            e(t)
        },
        error: function(e) {
            console.log("error : " + JSON.stringify(e))
        }
    })
}
function loadMegaMenuEvents() {
    document.querySelectorAll(".category-container,.subcategory-row,.redirection-container,.redirection-container-fit,.third-row,.third-title").forEach(e=>{
        e.addEventListener("click", function(e) {
            if (!($(e.target).hasClass("scroll_down_cont") || $(e.target).hasClass("scroll_up_cont") || $(e.target).parent().hasClass("scroll_down_cont") || $(e.target).parent().hasClass("scroll_up_cont")))
                if (console.log("e.target.id", e.target.id),
                "category-container" == e.currentTarget.classList[0]) {
                    fourthColumnHider(),
                    thirdColumnHider(),
                    redirectionContHider();
                    let t = e.currentTarget.id.split("-")[1];
                    subCategoryOpener(t)
                } else if ("category-title" == e.currentTarget.classList[0]) {
                    fourthColumnHider(),
                    thirdColumnHider(),
                    redirectionContHider();
                    let t = e.currentTarget.parentElement.parentElement.id.split("-")[1];
                    subCategoryOpener(t),
                    e.stopPropagation()
                } else if ("subcategory-row" == e.currentTarget.classList[0]) {
                    let t = e.currentTarget.id;
                    redirectionContOpener(t),
                    e.stopPropagation()
                } else if ("subcategory-title" == e.currentTarget.classList[0]) {
                    let t = e.currentTarget.parentElement.parentElement.id;
                    redirectionContOpener(t),
                    e.stopPropagation()
                } else if ("subcategory-container" == e.currentTarget.classList[0])
                    fourthColumnHider(),
                    thirdColumnHider(),
                    redirectionContHider();
                else if ("third-row" == e.currentTarget.classList[0]) {
                    let t = e.currentTarget.id;
                    fourthColumnOpener(t),
                    e.stopPropagation()
                } else if ("third-title" == e.currentTarget.classList[0]) {
                    let t = e.currentTarget.parentElement.parentElement.id;
                    fourthColumnOpener(t),
                    e.stopPropagation()
                } else
                    "third-column" == e.currentTarget.classList[0] && fourthColumnHider()
        })
    }
    )
}
function subCategoryOpener(e) {
    $(".mm-wrapper.active .mm-content").css("border-bottom-right-radius", "16px"),
    "visible" == $(`#subcat-${e}`)[0].style.visibility ? (subCatHider(),
    $(".mm-content").css("width", ""),
    $(".mm-wrapper").css("width", "")) : (subCatHider(),
    $(".mm-content").addClass("width-45vw"),
    $(".mm-wrapper").addClass("width-45vw-24px"),
    $(`#subcat-${e}`).css("visibility", "visible"),
    $(".layer_1_cont .scroll_down_cont").removeClass("hide"),
    $(`#subcat-${e} .layer_1_cont`).innerHeight() + 32 < $(`#subcat-${e}`).innerHeight() && $(".layer_1_cont .scroll_down_cont").addClass("hide"),
    "1666" == storeid ? $(`#cat-${e}`).css("color", "#EEBA4D") : "830" == storeid ? $(`#cat-${e}`).css("color", "#CAAD59") : $(`#cat-${e}`).css("color", "#DD2745"),
    $(`#cat-${e}`).addClass("catSel-border"),
    $(`#cat-${e} > .item-pointer`).css("display", "block"),
    $(`#cat-${e} > .catTree_arrow_cont`).find(".catTree_arrow_default").addClass("hide"),
    $(`#cat-${e} > .catTree_arrow_cont`).find(".catTree_arrow_red").removeClass("hide"))
}
function redirectionContOpener(e) {
    if ($(`#${e}`).hasClass("catSel-border"))
        $(`#${e}`).next().hasClass("third-column") ? (fourthColumnHider(),
        thirdColumnHider()) : redirectionContHider();
    else {
        $(`.subcategory-row`).css("color", ""),
        $(`.subcategory-row`).removeClass("catSel-border"),
        $(`.subcategory-row > .item-pointer`).css("display", "none"),
        $(`.subcategory-row > .catTree_arrow_cont`).find(".catTree_arrow_default").removeClass("hide"),
        $(`.subcategory-row > .catTree_arrow_cont`).find(".catTree_arrow_red").addClass("hide"),
        $(`#${e}`).css("color", "#DD2745"),
        $(`#${e}`).addClass("catSel-border"),
        $(`#${e} > .item-pointer`).css("display", "block"),
        $(`#${e} > .catTree_arrow_cont`).find(".catTree_arrow_default").addClass("hide"),
        $(`#${e} > .catTree_arrow_cont`).find(".catTree_arrow_red").removeClass("hide"),
        $(".mm-content").css("width", ""),
        $(".mm-wrapper").css("width", ""),
        $(".mm-content").removeClass("width-45vw"),
        $(".mm-wrapper").removeClass("width-45vw-24px");
        let t = e.split("-")[2] + "-" + e.split("-")[3];
        $(`#${e}`).next().hasClass("redirection-container-fit") ? ($(".subcategory-container").css("border-right", ""),
        $(".subcategory-container").css("border-bottom-right-radius", "16px"),
        $(".redirection-container").css("visibility", "hidden"),
        $(".redirection-container-fit").css("visibility", "hidden"),
        $(`#red-${t}`).css("visibility", "visible"),
        $(".layer_2_cont .scroll_down_cont").removeClass("hide"),
        $(`#red-${t} .layer_2_cont`).innerHeight() + 32 < $(`#red-${t}`).innerHeight() && $(".layer_2_cont .scroll_down_cont").addClass("hide"),
        $(".mm-wrapper").removeClass("width-100vw"),
        $(".mm-content").removeClass("width-100vw"),
        $(".mm-wrapper").css("width", `calc(45vw + ${$(`#red-${t}`)[0].offsetWidth + 24}px`),
        $(".mm-content").css("width", `calc(45vw + ${$(`#red-${t}`)[0].offsetWidth}px`)) : $(`#${e}`).next().hasClass("redirection-container") ? ($(".subcategory-container").css("border-right", "solid 1px #e2e8f0"),
        $(".subcategory-container").css("border-bottom-right-radius", "0px"),
        $(".redirection-container").css("visibility", "hidden"),
        $(".redirection-container-fit").css("visibility", "hidden"),
        $(`#red-${t}`).css("visibility", "visible"),
        $(".layer_2_cont .scroll_down_cont").removeClass("hide"),
        $(`#red-${t} .layer_2_cont`).innerHeight() + 32 < $(`#red-${t}`).innerHeight() && $(".layer_2_cont .scroll_down_cont").addClass("hide"),
        $(".mm-wrapper").addClass("width-100vw"),
        $(".mm-content").addClass("width-100vw")) : $(`#${e}`).next().hasClass("third-column") ? ($(".third-column").css("visibility", "hidden"),
        $(`#red-${t}`).css("visibility", "visible"),
        $(".layer_2_cont .scroll_down_cont").removeClass("hide"),
        $(`#red-${t} .layer_2_cont`).innerHeight() + 32 < $(`#red-${t}`).innerHeight() && $(".layer_2_cont .scroll_down_cont").addClass("hide"),
        $(".mm-wrapper").addClass("width-66vw-24px"),
        $(".mm-content").addClass("width-66vw"),
        fourthColumnHider()) : (fourthColumnHider(),
        thirdColumnHider(),
        redirectionContHider())
    }
}
function fourthColumnOpener(e) {
    let t = e.split("-")[2] + "-" + e.split("-")[3] + "-" + e.split("-")[4];
    $(".mm-wrapper.active .mm-content").css("border-bottom-right-radius", "16px"),
    $(`#fourth-column-${t}`)[0] && ("visible" == $(`#fourth-column-${t}`)[0].style.visibility ? (fourthColumnHider(),
    $(".mm-content").css("width", ""),
    $(".mm-wrapper").css("width", "")) : (fourthColumnHider(),
    $(`#${e}`).css("color", "#DD2745"),
    $(`#${e}`).addClass("catSel-border"),
    $(`#${e} > .item-pointer`).css("display", "block"),
    $(`#${e} > .catTree_arrow_cont`).find(".catTree_arrow_default").addClass("hide"),
    $(`#${e} > .catTree_arrow_cont`).find(".catTree_arrow_red").removeClass("hide"),
    $(".mm-wrapper").addClass("width-89vw-24px"),
    $(".mm-content").addClass("width-89vw"),
    $(`#fourth-column-${t}`).css("visibility", "visible"),
    $(`#third-column-${e}`).css("color", "#DD2745"),
    $(`#third-column-${e}`).addClass("catSel-border"),
    $(`#third-column-${e} > .item-pointer`).css("display", "block"),
    $(`#third-column-${e} > .catTree_arrow_cont`).find(".catTree_arrow_default").addClass("hide"),
    $(`#third-column-${e} > .catTree_arrow_cont`).find(".catTree_arrow_red").removeClass("hide")))
}
function subCatHider() {
    $(".mm-content").removeClass("width-45vw"),
    $(".mm-wrapper").removeClass("width-45vw-24px"),
    $(".subcategory-container").css("visibility", "hidden"),
    $(`.category-container`).css("color", ""),
    $(`.category-container`).removeClass("catSel-border"),
    $(`.category-container > .item-pointer`).css("display", "none"),
    $(`.category-container > .catTree_arrow_cont`).find(".catTree_arrow_default").removeClass("hide"),
    $(`.category-container > .catTree_arrow_cont`).find(".catTree_arrow_red").addClass("hide")
}
function redirectionContHider() {
    $(".mm-wrapper").removeClass("width-100vw"),
    $(".mm-content").removeClass("width-100vw"),
    $(".mm-content").addClass("width-45vw"),
    $(".mm-wrapper").addClass("width-45vw-24px"),
    $(`.subcategory-row`).css("color", ""),
    $(`.subcategory-row`).removeClass("catSel-border"),
    $(`.subcategory-row > .item-pointer`).css("display", "none"),
    $(`.subcategory-row > .catTree_arrow_cont`).find(".catTree_arrow_default").removeClass("hide"),
    $(`.subcategory-row > .catTree_arrow_cont`).find(".catTree_arrow_red").addClass("hide"),
    $(".redirection-container").css("visibility", "hidden"),
    $(".redirection-container-fit").css("visibility", "hidden"),
    $(".subcategory-container").removeClass("no-border"),
    $(".subcategory-container").css("border-right", ""),
    $(".subcategory-container").css("border-bottom-right-radius", "16px")
}
function thirdColumnHider() {
    $(".mm-wrapper").removeClass("width-66vw-24px"),
    $(".mm-content").removeClass("width-66vw"),
    $(".mm-content").addClass("width-45vw"),
    $(".mm-wrapper").addClass("width-45vw-24px"),
    $(`.subcategory-row`).css("color", ""),
    $(`.subcategory-row`).removeClass("catSel-border"),
    $(`.subcategory-row > .item-pointer`).css("display", "none"),
    $(`.subcategory-row > .catTree_arrow_cont`).find(".catTree_arrow_default").removeClass("hide"),
    $(`.subcategory-row > .catTree_arrow_cont`).find(".catTree_arrow_red").addClass("hide"),
    $(".third-column").css("visibility", "hidden"),
    $(".subcategory-container").removeClass("no-border")
}
function fourthColumnHider() {
    $(".mm-wrapper").removeClass("width-89vw-24px"),
    $(".mm-content").removeClass("width-89vw"),
    $(".mm-wrapper").addClass("width-66vw-24px"),
    $(".mm-content").addClass("width-66vw"),
    $(".fourth-column").css("visibility", "hidden"),
    $(`.third-row`).css("color", ""),
    $(`.third-row`).removeClass("catSel-border"),
    $(`.third-row > .item-pointer`).css("display", "none"),
    $(`.third-row > .catTree_arrow_cont`).find(".catTree_arrow_default").removeClass("hide"),
    $(`.third-row > .catTree_arrow_cont`).find(".catTree_arrow_red").addClass("hide")
}
function processData(e) {
    var t = {};
    return jQuery.each(e, function(e, i) {
        t[i.name] = i.value
    }),
    JSON.stringify(t)
}
function minimizeChat() {
    $("#lc_chat_layout").removeClass("showChatBox"),
    $("#h-mask").removeClass("is-active")
}
function maximizeChat() {
    $("#h-mask").addClass("is-active"),
    $("#lc_chat_layout").addClass("showChatBox")
}
function mobISDCode(e, t) {
    e = e ? e : "",
    0 !== $(t).parents("form.edit-form").length ? $(t).parents("form").find("input[name=mprefix]").val(e) : (e && "" !== e || $(t).parents("form").find("input[name=mob]").addClass("error"),
    $(t).parents("form").find("input[name=mprefix]").val(e),
    $(t).parents("form").find("span.countryCodeVal").text(e))
}
function clearSubCategorySelection() {
    $(".subcategory-tile").removeClass("active"),
    $(".subcategory-list").find(".blank-placeholder").remove(),
    $(".product-type-list").removeClass("visible"),
    $(".subcategory").find(".down-arrow").removeClass("open"),
    $(".subcategory .dropdown-content-arrow").removeClass("visible")
}
function cardColorSwatchSortUtility(e) {
    return e.sort(function(e, t) {
        return parseInt(e.code.replace("#", ""), 16) >= parseInt(t.code.replace("#", ""), 16)
    })
}
function initTooltip(e, t) {
    e = e.parent(),
    $(".info-window .info-window-content").html(e.find("a").data("tooltip")),
    $(".info-window-content").find(".info-window-quantity").text(e.parents(".c-item.flex-row").find(".c-item-qty-val").val());
    var i = $(".info-window")
      , s = e.offset().top + 30 + (t ? t : 0)
      , o = e.offset().left - i.width() / 2 + 3;
    i.css({
        top: s + "px",
        left: o + "px"
    }),
    setTimeout(function() {
        i.show()
    }, 100)
}
function loopShortlist() {
    $(document).attr("data-btn");
    $.ajax({
        url: "/api/shortlist/items",
        method: "GET",
        contentType: "application/json; charset=UTF-8",
        async: !0,
        cache: !0,
        beforeSend: function(e) {},
        success: function(e, t, i) {
            $(".sl-product-wrapper").show();
            var s = (e.data.shortlist && e.data.shortlist.corporate ? e.data.shortlist.corporate.length : 0) + (e.data.shortlist && e.data.shortlist.general ? e.data.shortlist.general.length : 0);
            if (98 == $("body").data("type-two")) {
                var e = e.data.shortlist.corporate;
                if (e)
                    for (var o = 0; o < e.length; o++)
                        ($('.product-grid-item[data-pid="' + e[o].id + '"]').length > 0 || $('.pdp-label.top-left.sl-star[data-pid="' + e[o].id + '"]').length > 0) && ($('.sl-star[data-pid="' + e[o].id + '"]').addClass("in-slist").attr("data-in-slist", 1),
                        $('.sl-star[data-pid="' + e[o].id + '"]').find(".heart-icon").addClass("active"),
                        $('.sl-shortlist[data-pid="' + e[o].id + '"]').removeClass("sl-shortlist").text("View Shortlist").parents(".sl-add-link").attr("href", "/shortlist"),
                        $('.shortlist-btn[data-pid="' + e[o].id + '"]').html("Shortlisted")),
                        $('.shortlist-revamp.sl-star[data-pid="' + e[o].id + '"]').length > 0 && $('.sl-star[data-pid="' + e[o].id + '"]').addClass("in-slist").attr("data-in-slist", 1)
            } else {
                var e = e.data.shortlist.general;
                if (e)
                    for (var o = 0; o < e.length; o++)
                        ($('.product-grid-item[data-pid="' + e[o].id + '"]').length > 0 || $('.pdp-label.top-left.sl-star[data-pid="' + e[o].id + '"]').length > 0) && ($('.sl-star[data-pid="' + e[o].id + '"]').addClass("in-slist active-heart").attr("data-in-slist", 1),
                        $('.sl-star[data-pid="' + e[o].id + '"]').find(".heart-icon").addClass("active"),
                        $('.shortlist-btn[data-pid="' + e[o].id + '"]').html("Shortlisted")),
                        $('.shortlist-revamp.sl-star[data-pid="' + e[o].id + '"]').length > 0 && $('.sl-star[data-pid="' + e[o].id + '"]').addClass("in-slist active-heart").attr("data-in-slist", 1)
            }
            s > 0 && ($(".sl-count").text(s),
            $(".sl-count").removeClass("hide"),
            $(".igp-shortlist-red").removeClass("hide"),
            $(".igp-shortlist-black").addClass("hide"))
        },
        error: function(e) {}
    })
}
function getExpressDate(e, t) {
    t = (t + "").substr(0, 2);
    var i = ""
      , s = new Date(dateToday);
    if (e) {
        hoursPassed >= t ? s.setDate(s.getDate() + e) : s.setDate(s.getDate() + e - 1),
        i = s.getDate();
        var o = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
          , n = o[s.getMonth()];
        return i = i < 10 ? "0" + i : i,
        {
            date: i,
            month: n
        }
    }
}
function verifySeal() {
    window.open("https://seal.godaddy.com/verifySeal?sealID=PieITIxyLQ1t9K6LL2BZlQymdruIjOMfrD4745PQKGdcLfxpe3hBYvRGpbB4", "SealVerfication", "menubar=no,toolbar=no,personalbar=no,location=yes,status=no,resizable=yes,fullscreen=no,scrollbars=no,width=593,height=600")
}
function selectCountryHandler(e) {
    var t = e
      , i = $(t).parents("form").find("input[name=pcode]").val()
      , s = $(t).parents("form").find("input[name=cid]").val();
    "99" == s ? ($(t).parents("form").find('input[name="state"]').attr("readonly", !0),
    $(t).parents("form").find('input[name="city"]').attr("readonly", !0),
    $(t).parents("form").find('input[name="pcode"]').attr({
        minlength: "5",
        maxlength: "6"
    }),
    $(t).parents("form").find('input[name="mob"]').attr({
        minlength: "10",
        maxlength: "10"
    }),
    $(t).parents("form").find('input[name="mob"]').addClass("mobile"),
    6 == i.length && (console.log("inside chk"),
    $.ajax({
        url: "/api/user/address?cid=" + s + "&pin=" + i,
        method: "GET",
        dataType: "json",
        contentType: "application/json; charset=UTF-8",
        async: !0,
        cache: !0,
        beforeSend: function(e) {
            console.log("before pin send")
        },
        success: function(e, i, s) {
            $(t).parents("form").find('input[name="state"]').val(e.state),
            $(t).parents("form").find('input[name="city"]').val(e.city)
        },
        complete: function(e, t) {}
    }))) : ($(t).parents("form").find('input[name="pcode"]').attr({
        minlength: "1",
        maxlength: "6"
    }),
    $(t).parents("form").find('input[name="mob"]').attr({
        minlength: "4",
        maxlength: "13"
    }),
    $(t).parents("form").find('input[name="mob"]').removeClass("mobile"),
    $(t).parents("form").find('input[name="state"]').val(""),
    $(t).parents("form").find('input[name="city"]').val(""),
    $(t).parents("form").find('input[name="state"]').removeAttr("readonly"),
    $(t).parents("form").find('input[name="city"]').removeAttr("readonly"))
}
function suggestionsVisibility(e, t) {
    if (t = t || "",
    $("#suggestedItems").html(`<div id="searchSuggestionloader" style="opacity: 1;transition: all 0.5s ease 0s;display: flex;"><div class="loader"></div></div>`),
    e) {
        var i;
        $(".inf-suggestedItems") && $(".inf-suggestedItems").length && (i = `
            <h6 style="padding: 12px 3px 3px;font-size: 1.2em;">Top Collection</h6>
            <ul>
            <li><a href="/luxury-flowers?search=std" onclick="searchClick({'search_term': '${t}', 'search_section': 'Top Collection', 'item_name': 'Luxury Flowers', 'item_position': 1, 'search_suggestion_selected': true, 'search_count':''})" class="d-flex"><div class="icon-wrapper-suggestion">
            <img class="img-responsive lazy-load-image" alt="search icon" src="${cdn.assetsURL}svg-icons/search.svg"></img>
            </div>Luxury Flowers</a></li>
            <li><a href="/birthday-flowers?search=std" onclick="searchClick({'search_term': '${t}', 'search_section': 'Top Collection', 'item_name': 'Birthday Flowers', 'item_position': 2, 'search_suggestion_selected': true, 'search_count':''})" class="d-flex"><div class="icon-wrapper-suggestion">
            <img class="img-responsive lazy-load-image" alt="search icon" src="${cdn.assetsURL}svg-icons/search.svg"></img>
                </div>Birthday Flowers</a></li>
            <li><a href="/hand-tied-bouquets?search=std" onclick="searchClick({'search_term': '${t}', 'search_section': 'Top Collection', 'item_name': 'Hand-tied Bouquets', 'item_position': 3, 'search_suggestion_selected': true, 'search_count':''})" class="d-flex"><div class="icon-wrapper-suggestion">
            <img class="img-responsive lazy-load-image" alt="search icon" src="${cdn.assetsURL}svg-icons/search.svg"></img>
        </div>Hand-tied Bouquets</a></li>
            <li><a href="/imported-flowers?search=std" onclick="searchClick({'search_term': '${t}', 'search_section': 'Top Collection', 'item_name': 'Imported Flowers', 'item_position': 4, 'search_suggestion_selected': true, 'search_count':''})" class="d-flex"><div class="icon-wrapper-suggestion">
            <img class="img-responsive lazy-load-image" alt="search icon" src="${cdn.assetsURL}svg-icons/search.svg"></img>
        </div>Imported Flowers</a></li>
            <li><a href="/vibrant-flowers?search=std" onclick="searchClick({'search_term': '${t}', 'search_section': 'Top Collection', 'item_name': 'Vibrant Flowers', 'item_position': 5, 'search_suggestion_selected': true, 'search_count':''})" class="d-flex"><div class="icon-wrapper-suggestion">
            <img class="img-responsive lazy-load-image" alt="search icon" src="${cdn.assetsURL}svg-icons/search.svg"></img>
        </div>Vibrant Flowers</a></li>
        <li><a href="/anniversary-flowers?search=std" onclick="searchClick({'search_term': '${t}', 'search_section': 'Top Collection', 'item_name': 'Anniversary Flowers', 'item_position': 6, 'search_suggestion_selected': true, 'search_count':''})" class="d-flex"><div class="icon-wrapper-suggestion">
        <img class="img-responsive lazy-load-image" alt="search icon" src="${cdn.assetsURL}svg-icons/search.svg"></img>
        </div>Anniversary Flowers</a></li>
        </ul> ${recentSearch()} `,
        $("#suggestedItems").removeClass("hide")),
        $(".ps-search-suggestions") && $(".ps-search-suggestions").length && (i = `
            <h6 style="padding: 12px 3px 3px;font-size: 1.2em;">Top Collection</h6>
            <ul>
            <li><a href="/top-picks?search=std" onclick="searchClick({'search_term': 'Bestsellers', 'search_section': 'Top Collection', 'item_name': 'Best Sellers', 'item_position': 1, 'search_suggestion_selected': true, 'search_count':''})" class="d-flex"><div class="icon-wrapper-suggestion">
            <img class="img-responsive lazy-load-image" alt="search icon" src="${cdn.assetsURL}svg-icons/search.svg"></img>
            </div>Best Sellers</a></li>
            <li><a href="/new-arrivals?search=std" onclick="searchClick({'search_term': 'New Arrivals', 'search_section': 'Top Collection', 'item_name': 'New Arrivals', 'item_position': 2, 'search_suggestion_selected': true, 'search_count':''})" class="d-flex"><div class="icon-wrapper-suggestion">
            <img class="img-responsive lazy-load-image" alt="search icon" src="${cdn.assetsURL}svg-icons/search.svg"></img>
                </div>New Arrivals</a></li>
            <li><a href="/trending?search=std" onclick="searchClick({'search_term': 'Trending', 'search_section': 'Top Collection', 'item_name': 'Trending', 'item_position': 3, 'search_suggestion_selected': true, 'search_count':''})" class="d-flex"><div class="icon-wrapper-suggestion">
            <img class="img-responsive lazy-load-image" alt="search icon" src="${cdn.assetsURL}svg-icons/search.svg"></img>
        </div>Trending</a></li>
            <li><a href="/clearance-sale?search=std" onclick="searchClick({'search_term': 'Sale', 'search_section': 'Top Collection', 'item_name': 'Sale', 'item_position': 4, 'search_suggestion_selected': true, 'search_count':''})" class="d-flex"><div class="icon-wrapper-suggestion">
            <img class="img-responsive lazy-load-image" alt="search icon" src="${cdn.assetsURL}svg-icons/search.svg"></img>
        </div>Sale</a></li>
        </ul> ${recentSearch()} `,
        $("#suggestedItems").removeClass("hide")),
        $("#suggestedItems").html(i),
        $("#suggestedItems").removeClass("suggested-items-height-dec"),
        $("#suggestedItems").addClass("suggested-items-height-inc")
    } else
        $("#suggestedItems").html(""),
        $("#suggestedItems").addClass("suggested-items-height-dec"),
        $("#suggestedItems").removeClass("suggested-items-height-inc"),
        $("#suggestedItems").addClass("hide")
}
function getTrendingProducts() {
    var e = localStorage.getItem("pdpRecoKeys") ? JSON.parse(localStorage.getItem("pdpRecoKeys")) : ""
      , t = localStorage.getItem("visitedPlp") ? JSON.parse(localStorage.getItem("visitedPlp")) : ""
      , i = {};
    i.searchTerm = e.data && e.data.searchTerm ? e.data.searchTerm : "",
    i.productID = e.data && e.data.productID ? e.data.productID : "",
    i.urls = t.urls,
    t || i.searchTerm && i.searchTerm.length || (i.noPageVisited = !0),
    $.ajax({
        url: "/getTrendingSuggestions",
        method: "POST",
        data: JSON.stringify(i),
        contentType: "application/json; charset=UTF-8",
        success: function(e) {
            if (e.error)
                console.log(e.error);
            else if (e) {
                $(".searched-text-container").removeClass("hide"),
                $(".prod-card-search-suggestions").html(e);
                var t = $(".prod-card-search-suggestions").find(".suggested-collections").length
                  , i = {
                    event: "search_suggestion_impression",
                    flag_suggestion: t > 0 ? "true" : "false",
                    search_section: "Default Suggestions"
                }
            } else
                console.log("no data");
            window.dataLayer.push(i)
        },
        error: function(e) {
            console.log("error")
        }
    })
}
function recentSearch() {
    var e = ""
      , t = getLocalStorageValue("searchedList") ? JSON.parse(getLocalStorageValue("searchedList")) : null;
    return t && t.length > 0 && (e += '<h6 style="padding: 12px 3px 3px;font-size: 1.2em;">Recent Search</h6>',
    e += '<ul id="recentsSearch">',
    $.each(t, function(t, i) {
        t < 5 && (e += `<li><a href="/search?q=${i}" onclick="searchClick({ 'search_term': '', 'search_section': 'Recent Searches', 'item_name': '${i}', 'item_position': ${t + 1}, 'search_suggestion_selected': true, 'search_count':''})" class="d-flex" style="text-transform: capitalize;">
                    <div class="icon-prev-search icon-wrapper-suggestion"></div>
                    <div>${i}</div>
                    </a></li>`)
    })),
    e += "</ul>"
}
function searchClick(e) {
    var t = []
      , i = []
      , s = document.getElementById("categories-name-list")
      , o = document.getElementById("products-name-list");
    t = s && s.value && s.value.split(","),
    i = o && o.value && o.value.split(","),
    e.categoriesList = t && t,
    e.productsNameList = i && i,
    localStorage.setItem("searchEvent", JSON.stringify(e))
}
function selectionBarClick(e, t) {
    $(this).data("data-val"),
    t.micrositename = micrositename,
    onclickDataLayer("selection_bar_click", t)
}
function onclickDataLayer(e, t) {
    t = t || {},
    t.event = e,
    window.dataLayer && (window.dataLayer = window.dataLayer || [],
    window.dataLayer.push(t))
}
function getRecommandedProductCardData(e) {
    let t, i = JSON.parse(sessionStorage.getItem("searchedKeywords")), s = $("#ab_reco").text();
    switch (s) {
    case "default":
        t = 0;
        break;
    case "ab_reco_var2":
        t = 1;
        break;
    case "ab_reco_var3":
        t = 2
    }
    if (i.ab_flag = t,
    "5" != $("body").data("stid") && "1671" != $("body").data("stid") || !i || !(i.data.length >= 5))
        return !1;
    $.ajax({
        url: "/api/recommandedProducts",
        method: "POST",
        data: JSON.stringify(i),
        async: !0,
        cache: !0,
        contentType: "application/json; charset=UTF-8",
        beforeSend: function(e) {},
        success: function(t, i, s) {
            if ("empty" == t.products)
                return !1;
            printProductRecommandedCarousal(t, e)
        },
        error: function(e) {}
    })
}
function saveSearchedKeywordsAndNavigation(e, t, i, s, o) {
    let n = sessionStorage.getItem("searchedKeywords") ? JSON.parse(sessionStorage.getItem("searchedKeywords")) : {
        data: [],
        city: "",
        country: "",
        pincode: "",
        webstore_id: storeid
    };
    n.webstore_id = storeid,
    trimedValue(e) && !n.data.includes(trimedValue(e)) ? (n.data.push(trimedValue(e)),
    sessionStorage.setItem("searchedKeywords", JSON.stringify(n))) : !t || isNaN(t) || 6 != t.toString().length || n.data.includes(t) || (n.data.push(t),
    sessionStorage.setItem("searchedKeywords", JSON.stringify(n))),
    trimedValue(i) && !n.city.includes(trimedValue(i)) && (n.city = trimedValue(i),
    sessionStorage.setItem("searchedKeywords", JSON.stringify(n))),
    trimedValue(s) && !n.country.includes(trimedValue(s)) && (n.country = trimedValue(s),
    sessionStorage.setItem("searchedKeywords", JSON.stringify(n))),
    o && !n.country.includes(o) && (n.pincode = o,
    sessionStorage.setItem("searchedKeywords", JSON.stringify(n)))
}
function savePdpReco(e, t, i, s, o) {
    let n = localStorage.getItem("pdpRecoKeys") ? JSON.parse(localStorage.getItem("pdpRecoKeys")) : {
        data: {
            searchTerm: [],
            urls: [],
            productID: []
        },
        city: "",
        country: "",
        pincode: "",
        webstore_id: storeid
    }
      , a = localStorage.getItem("allRecoValues") ? JSON.parse(localStorage.getItem("allRecoValues")) : [];
    n.webstore_id = storeid,
    trimedValue(e) && !a.includes(trimedValue(e)) ? (e.indexOf("/") != -1 ? n.data.urls.push({
        value: e,
        timestamp: (new Date).getTime()
    }) : n.data.searchTerm.push({
        value: e,
        timestamp: (new Date).getTime()
    }),
    a.push(trimedValue(e))) : !t || isNaN(t) || 6 != t.toString().length || a.includes(t) ? trimedValue(e) && a.includes(trimedValue(e)) ? e.includes("/") ? updateTimestamp(trimedValue(e), n.data.urls) : updateTimestamp(trimedValue(e), n.data.searchTerm) : t && !isNaN(t) && 6 == t.toString().length && a.includes(t) && updateTimestamp(trimedValue(e), n.data.productID) : (n.data.productID.push({
        value: t,
        timestamp: (new Date).getTime()
    }),
    a.push(t)),
    trimedValue(i) && !n.city.includes(trimedValue(i)) && (n.city = trimedValue(i)),
    trimedValue(s) && !n.country.includes(trimedValue(s)) && (n.country = trimedValue(s)),
    o && !n.country.includes(o) && (n.pincode = trimedValue(String(o))),
    localStorage.setItem("pdpRecoKeys", JSON.stringify(n)),
    localStorage.setItem("allRecoValues", JSON.stringify(a))
}
function updateTimestamp(e, t) {
    var i = t.map(e=>{
        return e.value
    }
    )
      , s = i.indexOf(e);
    s !== -1 && (t[s].timestamp = (new Date).getTime())
}
function saveLastListingPath(e) {
    let t = sessionStorage.getItem("lastVisitedPath") ? JSON.parse(sessionStorage.getItem("lastVisitedPath")) : [];
    if (trimedValue(e)) {
        let i = e.split("");
        i.length > 1 && "/" === i[i.length - 1] && (e = i.slice(0, -1).join(""));
        let s = "/" == trimedValue(e) ? trimedValue(e) : e.includes("/") ? e.replace("/", "") : e;
        t = trimedValue(s)
    }
    sessionStorage.setItem("lastVisitedPath", JSON.stringify(t))
}
function trimedValue(e) {
    return !!e && (!(!e || !e.trim()) && e.trim())
}
function saveVisitedPlpData() {
    let e = localStorage.getItem("visitedPlp") ? JSON.parse(localStorage.getItem("visitedPlp")) : {
        urls: []
    };
    if (e.urls.length)
        var t = e.urls.find(function(e) {
            return e.value === window.location.pathname
        });
    var i = {
        value: window.location.pathname,
        timestamp: (new Date).getTime()
    };
    t ? t.timestamp = (new Date).getTime() : e.urls.push(i),
    localStorage.setItem("visitedPlp", JSON.stringify(e))
}
function getBest99Slick() {
    $(".trending-products-carousel:last").slick({
        infinite: !0,
        slidesToShow: 4,
        slidesToScroll: 4,
        accessibility: !1,
        dots: !0,
        arrows: !0
    }).resize(),
    $(".trending-products-carousel").slick({
        infinite: !0,
        slidesToShow: 4,
        slidesToScroll: 4,
        accessibility: !1,
        dots: !0,
        arrows: !0
    }).resize(),
    $(".trending-products-carousel1:last").slick({
        infinite: !0,
        slidesToShow: 3,
        slidesToScroll: 3,
        accessibility: !1,
        dots: !0,
        arrows: !0
    }).resize(),
    $(".trending-products-carousel2:last").slick({
        infinite: !0,
        slidesToShow: 4,
        slidesToScroll: 4,
        accessibility: !1,
        dots: !0,
        arrows: !0
    }).resize(),
    $(".recommended-products-carousel").slick({
        infinite: !0,
        slidesToShow: 3,
        slidesToScroll: 3,
        accessibility: !1,
        dots: !1,
        arrows: !0
    }).resize()
}
function printProductRecommandedCarousal(e, t) {
    var i, s = parseInt($("body").attr("data-reco_d"));
    switch (t) {
    case "CL":
        i = `<div style='width:100%'>${e}</div><div style="min-height:40px; background:#f2f2f2"></div>`,
        0 == s ? $("#edpWrapper").after(function() {
            return i
        }) : $("#edpWrapper").before(function() {
            return i
        });
        break;
    case "SP":
        i = `<div style='width:100%'>${e}</div><div style="min-height:40px; background:#f2f2f2"></div>`;
        var o = document.querySelectorAll(".edp-group-wrapper");
        1 == s ? (s = 0,
        $(o[s]).before(function() {
            return i
        })) : s > o.length + 1 ? (s = o.length - 1,
        $(o[s]).after(function() {
            return i
        })) : (s -= 2,
        $(o[s]).after(function() {
            return i
        }));
        break;
    default:
        i = `<div style='width:100%'>${e}</div><div style="width:100%; min-height:20px; background:#f2f2f2"></div>`,
        s = 4 * (s - 1),
        s -= 1;
        var n = document.querySelectorAll(".product-grid-item");
        $(n[s]).after(function() {
            return i
        })
    }
    $(".recommended-products-carousel").slick({
        infinite: !0,
        slidesToShow: 3,
        slidesToScroll: 3,
        accessibility: !1,
        dots: !1,
        arrows: !0
    }).resize()
}
function shortListandMakeItExtraSpecialInitializer() {
    (corpLabel || 5 == $("body").data("stid") || 1671 == $("body").data("stid") || 830 == $("body").data("stid") || 1404 == $("body").data("stid") || 1666 == $("body").data("stid")) && loopShortlist()
}
function emptyCheck() {
    var e = document.getElementById("igp-corporate-contact-us");
    e[0].value.length && e[1].value.length && e[2].value.length >= 10 && e[3].value.length ? document.getElementById("form-input-button").disabled = !1 : document.getElementById("form-input-button").disabled = !0
}
function validateEmail(e) {
    return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)
}
function corporateFormSubmit(e) {
    event.preventDefault();
    var t, i = document.getElementById("contactUsForm"), s = document.getElementById("igp-corporate-contact-us");
    if ("form1" == e) {
        if (!validateEmail(i[1].value))
            return alert("Enter a valid e-mail address."),
            !1;
        if (i[2].value.length < 4)
            return alert("Enter a valid phone number."),
            !1;
        t = {
            name: i[0].value,
            email: i[1].value,
            mob: i[2].value,
            url: location.pathname,
            company: i[3].value
        },
        i[4].value && (t.desc = i[4].value),
        i[5] && "hidden" == i[5].type && (t.micrositeId = i[5].value)
    } else {
        if (!validateEmail(s[1].value))
            return alert("Enter a valid e-mail address"),
            !1;
        if (s[2].value.length < 10)
            return alert("Enter a valid phone number."),
            !1;
        t = {
            name: s[0].value,
            email: s[1].value,
            mob: s[2].value,
            url: location.pathname,
            company: s[3].value
        },
        s[4] && "hidden" == s[4].type && (t.micrositeId = s[4].value)
    }
    const o = e=>"" != e;
    t && Object.values(t).every(o) ? $.ajax({
        url: "/api/support",
        method: "POST",
        dataType: "json",
        data: JSON.stringify(t),
        contentType: "application/json; charset=UTF-8",
        async: !0,
        cache: !0,
        beforeSend: function(e) {
            $('<img src="' + cdn.assetsURL + 'images/loading.gif" style="width: 20px;" class="cat-loader" align="center">').insertAfter(".contact-title-border")
        },
        success: function(i, s, o) {
            if ("Success" == i.status) {
                if ($(".cat-loader").remove(),
                $(".contact-details-height").removeClass("opacity-0-5"),
                "form1" == e) {
                    var n = '<div class="success-msg" style="width: 70%;color: #fff;font-size: 1.5em;">Thanks for contacting us.<br/> Your message has been received. Our Enterprise Solution specialist will reach out to you soon.</div>';
                    $("#contactUsForm").html(n)
                } else {
                    if ("/corporate-gifts" == location.pathname)
                        var n = '<div class="success-msg d-flex justify-content-center align-items-center" style="font-size: 1.2em;padding:0px 11px;line-height: 1.3;">Thanks for contacting us. Your message has been received. Our enterprise solution specialist will reach out to you soon.</div>';
                    else
                        var n = '<div class="success-msg d-flex justify-content-center align-items-center" style="font-size: 1.2em;padding:0px 11px;line-height: 1.3;">Thanks for contacting us. Your message has been received. Our enterprise solution specialist will reach out to you soon.</div>';
                    $("#igp-corporate-contact-us").html(n)
                }
                $("#send-btn").prop("disabled", !1),
                window.dataLayer = window.dataLayer || [];
                var a = {
                    event: "userformsubmit",
                    formtype: "lead generation",
                    uemail1: t.email,
                    ucontact: t.mob,
                    uname: t.name,
                    mode: "form1" == e ? "Get in touch" : "Lead generation"
                };
                "form1" == e ? a.umessage = t.desc : a.ucompany = t.company,
                window.dataLayer.push(a)
            } else
                $(".error-msg-text").removeClass("hide"),
                $(".cat-loader").remove(),
                $(".contact-details-height").removeClass("opacity-0-5"),
                $("#send-btn").prop("disabled", !1)
        },
        complete: function(e, t) {}
    }) : alert("Required fields should not empty.")
}
function validatePassword(e) {
    return /.{6,}/.test(e)
}
function showMessage(e, t) {
    if (e) {
        t = t || {},
        t.closeBtn = !!t.no_destroy || t.closeBtn,
        $("body .messNote").remove();
        var i = '<div class="messNote">';
        t.closeBtn && (i += '<i class="errMessageClose fa fa-close" style="cursor: pointer; right: 0.5em; position: absolute;top: 4px;"></i>'),
        i += '<div style="text-align: center;">' + e + "</div></div>",
        $("body").append(i),
        t.no_destroy || (t.t = t.t ? t.t : 2e3,
        setTimeout(function() {
            $("body .messNote").remove()
        }, t.t))
    }
}
function getLiveOrderTrackingWidget() {
    !$("body").data("ishome") && "PL" != window.pgtype || "Business" == window.type2 || ($(".logged-user").length || $(".logged").length) && (sessionStorage.getItem("orderTrackWidget-closed") || $.ajax({
        url: "/getOrderStatusDetails",
        method: "GET",
        contentType: "application/json; charset=UTF-8",
        success: function(e, t, i) {
            if (e && "error" != e.status) {
                var s = $("<link>", {
                    rel: "stylesheet",
                    type: "text/css",
                    href: cdn.assetsURL + "stylesheets/widget/orderTracking-widget.css"
                });
                $("head").append(s),
                $(".site-wrapper-desk").append(e),
                $("#order_details-1").removeClass("hide"),
                $("#tab-1").addClass("selected");
                var o = {
                    event: "live_order_widget_impression",
                    email: $("#uemail1").val(),
                    order_count: $(".total_order_count").val()
                };
                if (window.dataLayer.push(o),
                $("#tab-1").hasClass("selected")) {
                    var n = {
                        event: "live_order_widget_order_click",
                        order_position: $("#tab-1").index() + 1
                    };
                    window.dataLayer.push(n)
                }
                var a = $("<script>", {
                    src: cdn.assetsURL + "javascripts/widget/orderTracking-widget.js",
                    defer: !0
                });
                $("body").append(a)
            } else
                console.log("Data not found")
        },
        error: function(e) {
            console.log("error sending data")
        }
    })),
    $(window).off("scroll", getLiveOrderTrackingWidget)
}
function getUserAccountMenu() {
    $("#user-data").data("userid") && $.ajax({
        url: "/userAccountMenu",
        method: "GET",
        contentType: "application/json; charset=UTF-8",
        async: !0,
        beforeSend: function(e) {},
        success: function(e, t, i) {
            if (e && "error" != t) {
                if ($("#acc-menu").html(e),
                $(".first_premium_order").length && "/success" == window.location.pathname) {
                    let e = {
                        event: "select_impression",
                        path: "order success"
                    };
                    pushDataLayer(e),
                    $(".selected_member_user").removeClass("hide"),
                    $(".select_member_text").removeClass("hide"),
                    $(".is_select_member").val(!0),
                    $(".get_select_link").addClass("hide"),
                    $(".non_select_currency_cont").removeClass("non_select_currency_cont"),
                    $(".logged-user").find(".icon-wrapper.top-action-icons").addClass("select_premium_cust")
                }
            } else
                console.log(e)
        },
        error: function(e) {
            console.log("error sending")
        }
    })
}
var toggleCatMegamenuFlag, xhrObj, shortListAnimation, giftAnimation, page_type, activeXHR = !1, testVar = "ABC", isRevamp = !!$(".product-item-revamp").length, tempForBuild = "tempForBuild0120", googleTapScript = !0;
if ("IntersectionObserver"in window)
    var observer = new IntersectionObserver(handleIntersection,{
        rootMargin: "0px"
    });
if (document.addEventListener("DOMContentLoaded", function() {
    lazyLoadImgs(),
    initPdpPageScrollHandler()
}),
$(document).ready(function() {
    if (getUserAccountMenu(),
    "830" == storeid && $(".int-mm-column .if-mm-dd.Cities").first().height() > window.innerHeight - 108 && $(".int-mm-column .if-mm-dd").addClass("overflow-height"),
    $(document).on("click", ".browser_back_icon", function() {
        window.history.go(-1)
    }),
    !$("body").data("static"))
        if ("prod-des" != $("body").data("page"))
            savePdpReco(window.location.pathname, null, null, null, null);
        else {
            let e = $(".prod-id").val();
            e = Number(e),
            e && savePdpReco(null, e, null, null, null)
        }
    $("body").data("static") || "prod-des" != $("body").data("page") && saveLastListingPath(window.location.pathname),
    $("input[name=mob], .restricted-input").keydown(function(e) {
        $.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 || 65 === e.keyCode && (e.ctrlKey === !0 || e.metaKey === !0) || e.keyCode >= 35 && e.keyCode <= 40 || (e.shiftKey || e.keyCode < 48 || e.keyCode > 57) && (e.keyCode < 96 || e.keyCode > 105) && e.preventDefault()
    }),
    lazyLoadImgs();
    var e = $(".prod-id").val()
      , t = JSON.parse(localStorage.getItem("pers-info-" + e))
      , i = (new Date).getTime();
    t && t.expireOn && i > t.expireOn && (localStorage.removeItem("pers-info-" + e),
    t = null),
    $(".show-toolbar-button").on("click", function() {
        $(this).hasClass("leftIcon") ? ($(this).hide(),
        $(".selection-bar-w.relative .selection-bar.row.no-margin.showHideTopBar").addClass("active"),
        $(this).removeClass("leftIcon").addClass("rightIcon").show()) : ($(this).hide(),
        $(".selection-bar-w.relative .selection-bar.row.no-margin.showHideTopBar").removeClass("active"),
        $(this).removeClass("rightIcon").addClass("leftIcon").addClass("stopScroll").show())
    }),
    $(".trending-products-carousel1").slick({
        infinite: !0,
        slidesToShow: 3,
        slidesToScroll: 3,
        accessibility: !1,
        dots: !1,
        arrows: !0,
        gateway: !1
    }).show(),
    $(".gateway-banner-carousel1") && $(".gateway-banner-carousel1").slick({
        lazyLoad: "progressive",
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: !0,
        variableWidth: !0,
        autoplay: !0,
        autoplaySpeed: 4e3,
        dots: !1,
        arrows: !0,
        gateway: !0
    }).show();
    let s = localStorage.getItem("searchEvent") ? JSON.parse(localStorage.getItem("searchEvent")) : null;
    if (s) {
        var o = document.querySelector(".f15>.number");
        o ? s.search_count = parseInt(o.innerText) : $(".listing-h3").length ? s.search_count = parseInt($(".listing-h3").data("total-prods")) : $(".text-red").length ? s.search_count = parseInt($(".text-red").data("total-prods")) : $("#prodNumber").length && (s.search_count = parseInt($("#prodNumber").text())),
        (void 0 == s.search_count || null == s.search_count || isNaN(s.search_count)) && (s.search_count = 0),
        $(".search-head-text").length && (s.flag_spell_check = $(".search-head-text").data("spellcheck"),
        s.flag_no_results = $(".search-head-text").data("no_results"),
        s.modified_search_term = s.flag_spell_check ? $(".search-head-text").data("modified_search_term") : ""),
        onclickDataLayer("search", s),
        localStorage.removeItem("searchEvent")
    }
    let n = new URL(window.location.href)
      , a = n.searchParams.get("pincode") ? +n.searchParams.get("pincode") : null
      , r = n.searchParams.get("country") ? n.searchParams.get("country") : null
      , l = n.searchParams.get("city") ? n.searchParams.get("city") : null
      , d = ["PL", "SP", "CL"]
      , c = parseInt($("body").attr("data-show_reco"));
    if ($("body").attr("data-pagetype") && d.includes($("body").attr("data-pagetype")) && ("5" == window.storeid || "1671" == window.storeid) && (saveSearchedKeywordsAndNavigation(window.location.pathname, null, l, r, a),
    c && getRecommandedProductCardData($("body").attr("data-pagetype")),
    saveVisitedPlpData()),
    window && window.location && "/search" == window.location.pathname) {
        let e = window.location.href.split(window.location.pathname);
        e = window.location.pathname + e[1]
    }
    $(document).on("click", ".reminder_entry", function() {
        pushDataLayer({
            event: "reminders_click",
            user_mode: $("#user-data").data("userid") ? "logged In" : "logged out",
            entry_point: "inside_profile"
        })
    });
    var h = 85 * window.innerHeight / 100 - 72;
    $(".mm-content,.subcategory-container,.third-column").scroll(function(e) {
        e.stopPropagation(),
        e.stopImmediatePropagation();
        var t = $(this);
        t.scrollTop() <= 10 && t.find(">div>.scroll_up_cont").addClass("hide"),
        t.scrollTop() <= t.find(">div").innerHeight() + 22 - h && t.find(">div>.scroll_down_cont").removeClass("hide"),
        t.scrollTop() >= 10 && t.find(">div>.scroll_up_cont").removeClass("hide"),
        t.scrollTop() >= t.find(">div").innerHeight() + 22 - h && t.find(">div>.scroll_down_cont").addClass("hide")
    }),
    $(document).on("click", ".scroll_up_cont", function(e) {
        e.stopPropagation(),
        e.stopImmediatePropagation(),
        $(this).parent().parent().stop();
        var t = $(this)
          , i = t.parent().parent();
        i.animate({
            scrollTop: i.scrollTop() - 144
        }, 500, function() {
            t.parent().parent().scrollTop() < 10 && t.parent().find(">.scroll_up_cont").addClass("hide"),
            t.parent().parent().scrollTop() < t.parent().innerHeight() + 22 - h && t.parent().find(">.scroll_down_cont").removeClass("hide")
        })
    }),
    $(document).on("click", ".scroll_down_cont", function(e) {
        e.stopPropagation(),
        e.stopImmediatePropagation(),
        $(this).parent().parent().stop();
        var t = $(this)
          , i = t.parent().parent();
        i.animate({
            scrollTop: i.scrollTop() + 144
        }, 500, function() {
            t.parent().parent().scrollTop() > 10 && t.parent().find(">.scroll_up_cont").removeClass("hide"),
            t.parent().parent().scrollTop() > t.parent().innerHeight() + 22 - h && t.parent().find(">.scroll_down_cont").addClass("hide")
        })
    })
}),
$(".show-toolbar-button").length) {
    var scrollTimeout;
    $(window).scroll(function() {
        clearTimeout(scrollTimeout),
        scrollTimeout = setTimeout(function() {
            $(".show-toolbar-button").hasClass("stopScroll") || $(".clk-filter").hasClass("open-filter") || ($(window).scrollTop() > 200 ? ($(this).hide(),
            $(".selection-bar-w.relative .selection-bar.row.no-margin.showHideTopBar").addClass("active"),
            $(".show-toolbar-button").removeClass("leftIcon").addClass("rightIcon").show()) : ($(this).hide(),
            $(".selection-bar-w.relative .selection-bar.row.no-margin.showHideTopBar").removeClass("active"),
            $(".show-toolbar-button").removeClass("rightIcon").addClass("leftIcon").show()))
        }, 50)
    })
}
var testingVariable, ChatOpen = !1, fireAjax = function(e, t, i) {
    var s;
    $.ajax({
        url: "https://secure.ccavenue.com/transaction/transaction.do?command=getJsonData&access_code=" + e + "&currency=" + t + "&amount=" + i,
        dataType: "jsonp",
        jsonp: !1,
        jsonpCallback: "processData",
        success: function(e) {
            s = e
        },
        error: function(e, t, i) {
            console.log("An error occurred! " + (i ? i : e.status))
        }
    })
}, grep = function(e, t) {
    var i = []
      , s = e.length
      , o = 0;
    for (o; o < s; o++) {
        var n = e[o];
        if (t(n) && i.push(n),
        5 === i.length)
            break
    }
    return i
}, removeDupliactes = function(e, t) {
    var i = {}
      , s = [];
    for (var o in e)
        e[o][t]in i || (i[e[o][t]] = e[o]);
    for (var t in i)
        s.push(i[t]);
    return s
};
$(window).on("load", function() {
    loadSvgIcons()
}),
$(document).ready(function() {
    function e(e) {
        if (document.cookie.length > 0) {
            let t = document.cookie.indexOf(e + "=");
            if (t != -1) {
                t = t + e.length + 1;
                let i = document.cookie.indexOf(";", t);
                return i == -1 && (i = document.cookie.length),
                decodeURIComponent(document.cookie.substring(t, i))
            }
        }
        return ""
    }
    function t() {
        if ("" != e("__utmzz")) {
            let t = e("__utmzz").split("|");
            t.find(function(e) {
                e.includes("utmcsr") && !$("#igp-corporate-contact-us input[name=websource]").val() ? $("#igp-corporate-contact-us input[name=websource]").val(e.replace("utmcsr=", "")) : e.includes("utmcmd") && !$("#igp-corporate-contact-us input[name=web-medium]").val() && $("#igp-corporate-contact-us input[name=web-medium]").val(e.replace("utmcmd=", ""))
            })
        }
    }
    if (location.pathname.indexOf("contact-us") == -1 && location.pathname.indexOf("complaint") == -1 && location.pathname.indexOf("igp-select") == -1 && location.pathname.indexOf("smartbuy") == -1 && location.pathname.indexOf("smartbuypayzapp") == -1 && location.pathname.indexOf("feedback") == -1 && location.pathname.indexOf("reminders") == -1 || ($("#recViewed").addClass("hide"),
    $("#c-check-email").addClass("hide")),
    $(document).on("click", ".redirectItem", function() {
        var e = $(this).data("url")
          , t = "/" === e ? $(this).parents(".redirectItem").data("url") : e;
        if (t && "/" != t[0] && (t = "/" + t),
        this && this.classList && this.classList.contains("card-image-p")) {
            let e = parseInt($(this).data("position"));
            onclickDataLayer("cards_click", {
                item_url: window.location.origin + t,
                card_name: this.alt,
                card_position: e,
                item_name: "",
                item_selection: "None",
                micrositename: micrositename
            })
        } else
            $(this).parent().parent().parent().parent()[0].className.includes("card-image") && onclickDataLayer("cards_click", {
                item_url: window.location.origin + this.dataset.url,
                card_name: $(this).parent().parent().parent().parent().siblings()[0].innerText,
                card_position: parseInt(this.dataset.position),
                item_name: this.innerText,
                item_selection: "Tertiary",
                micrositename: micrositename
            });
        $(this).parent().hasClass("festival-title") && onclickDataLayer("selection_bar_click", {
            item_name: $(this).parent().find("a").length ? $(this).parent().find("a")[0].innerText : "",
            item_position: $(this).parents(".refine-list-item").data("index"),
            item_url: window.location.origin + "/" + e,
            sub_item_name: "View All",
            sub_position: "",
            level: "",
            micrositename: micrositename
        }),
        e && window.location.assign(e)
    }),
    function() {
        $(document).on("click", "#level1.hamburger_mobile li.catlevel", function(e) {
            var t = !1;
            $(this).prevAll("li").find("span.levelAction").each(function(e, i) {
                if (t = $(i).hasClass("minus"))
                    return !1
            }),
            $(this).siblings("li").find(".idlevel2").addClass("hamburgerHide"),
            $(this).siblings("li").find("span.levelAction").addClass("plus").removeClass("minus").text("+"),
            $(this).find("span.levelAction").toggleClass("plus"),
            $(this).find("span.levelAction").hasClass("plus") ? ($(this).find("span.levelAction").removeClass("minus").text("+"),
            $(this).find(".idlevel2").removeClass("hamburgerHide").addClass("hamburgerHide")) : ($(this).find("span.levelAction").addClass("minus").text("-"),
            $(this).find(".idlevel2").removeClass("hamburgerHide")),
            t && $("#ham-menu").animate({
                scrollTop: $(this).position().top
            }, 0)
        })
    }(),
    function() {
        var e;
        $(document).on("focusin", "input.suggestCountry", function() {
            var t = JSON.parse(sessionStorage.getItem("ccdata"))
              , i = $(this)
              , s = this
              , o = "co"
              , n = i.data("courier")
              , a = i.data("redirect")
              , r = t ? t.countries : null
              , l = i.data("handlers") ? i.data("handlers").split(",") : []
              , d = function(e, t, o) {
                if (l.length > 0) {
                    i.data("cid", e),
                    i.data("ccode", t),
                    i.data("cccode", o);
                    for (var n in l) {
                        var a = window[l[n].trim()];
                        a && a.constructor === Function && a(s)
                    }
                }
            }
              , c = ($(window).height(),
            i.parents("div").height(),
            i.parents("div").offset().top,
            {});
            c = {
                my: "left top",
                at: "left bottom",
                collision: "none"
            },
            i.autocomplete({
                source: function(e, t) {
                    var i = grep(r, function(t) {
                        var i = t.name
                          , s = o in t
                          , a = i.search(new RegExp("\\b" + e.term,"ig")) !== -1;
                        if (n) {
                            var r = !s || 1 === t[o];
                            return a && r
                        }
                        return a
                    }, n);
                    i = removeDupliactes(i, "code"),
                    t(i)
                },
                minLength: 2,
                focus: function(e, t) {
                    return i.val(t.item.code),
                    !1
                },
                select: function(e, t) {
                    if ($("#dd-icon-area").removeClass("hide"),
                    $("#revamp").length && addonsBasedOnPincode(),
                    $("#city-name-field").addClass("hide"),
                    $(".revamp-summary-edit-country").removeClass("hide"),
                    $(".revamp-form-input-country").css("max-width", "33%"),
                    e.stopPropagation(),
                    a === !0)
                        return window.location = t.item.url,
                        !1;
                    $(".suggestCountry").removeClass("error"),
                    t.item.id && ($(this).parents("form").find("input[name=cid]").val(t.item.id),
                    $(this).parents("form").find("input[name=pcode]").removeAttr("disabled"),
                    $(this).parents("form").find("input[name=pcode]").val(""),
                    $(this).parents("form").find("input[name=pcode]").focus(),
                    $(this).parents("form").find("input[name=city]").val(""),
                    $(this).parents("form").find("input[name=state]").val(""),
                    $(this).parents("form").find(".clear-pincode").remove("show"),
                    $(this).parents("form").find(".clear-pincode").addClass("hide"),
                    $(this).parents("form").find(".pincode-check").remove("show"),
                    $(this).parents("form").find(".pincode-check").addClass("hide")),
                    t.item.mprefix ? ($(this).parents("form").find("input[name=mprefix]").val(t.item.mprefix),
                    $(this).parents("form").find("span.countryCodeVal").text(t.item.mprefix),
                    $(this).parents("form").find("span.mprefixLabel").text(t.item.mprefix)) : ($(this).parents("form").find("input[name=mprefix]").val(""),
                    $(this).parents("form").find("span.mprefixLabel").text("")),
                    d(t.item.id, t.item.code, t.item.ccode),
                    $("#personalize-revamp").length && $("#country").blur();
                    var i = $(this).parents("form").find("input[name=pcode]");
                    return "/checkout" != window.location.pathname && "/myaddressbook" != window.location.pathname || "UAE" !== t.item.code ? (i.attr("disabled", !1),
                    i.removeClass("uae-international"),
                    i.removeAttr("readonly"),
                    i.val(""),
                    i.addClass("required pincode"),
                    $(this).parents("form").find(".form_pincode_cont").removeClass("hide"),
                    $(this).parents("form").find(".state_input_field").removeClass("hide")) : (i.val("000000"),
                    i.attr({
                        readonly: "readonly"
                    }),
                    i.addClass("uae-international"),
                    i.removeClass("required pincode"),
                    $(this).parents("form").find(".form_pincode_cont").addClass("hide"),
                    $(this).parents("form").find(".state_input_field").addClass("hide")),
                    !1
                },
                open: function(e, t) {
                    ($(this).prev("label") || $(this).next("label")).length > 0 ? $("ul.ui-menu").width($(this).parents("div").width()) : $("ul.ui-menu").width($(this).width()),
                    $("ul.ui-menu").css({
                        "z-index": "9999"
                    })
                },
                change: function(t, s) {
                    if (!s.item) {
                        console.log("Not selected from dropdown - check if it is valid");
                        var a = i.val().trim().toLowerCase();
                        if (!e) {
                            e = {};
                            for (var l in r)
                                n && o in r[l] ? 1 === r[l][o] && (e[r[l].name.toLowerCase()] = r[l]) : e[r[l].name.toLowerCase()] = r[l]
                        }
                        if (a.toLowerCase()in e)
                            i.val(e[a].code),
                            e[a].id && $(this).parents("form").find("input[name=cid]").val(e[a].id),
                            e[a].mprefix && ($(this).parents("form").find("input[name=mprefix]").val(e[a].mprefix),
                            $(this).parents("form").find("span.countryCodeVal").text(e[a].mprefix),
                            $(this).parents("form").find("span.mprefixLabel").text(e[a].mprefix)),
                            $(".suggestCountry").removeClass("error"),
                            d(e[a].id, e[a].code, e[a].ccode);
                        else {
                            $(".suggestCountry").val(""),
                            $(".suggestCountry").addClass("error");
                            var c = $(".revamp-form-input-country");
                            c.length && c.is(":visible") && !c.val().length && ($(".revamp-form-input-country").css("max-width", "100%"),
                            $(".revamp-summary-edit-country").addClass("hide"))
                        }
                    }
                },
                position: c
            }).autocomplete("instance")._renderItem = function(e, t) {
                var i = "";
                return i += a === !0 ? "<a href='/" + t.url + "'>" + t.code + "</a>" : "<span>" + t.code + "</span>",
                $("<li class='autocomplete-items redHover'>").append(i).appendTo(e)
            }
        })
    }(),
    function() {
        var e;
        $(document).on("focusin", "input.location-input-international", function() {
            var t = JSON.parse(sessionStorage.getItem("ccdata"))
              , i = $(this)
              , s = this
              , o = !1
              , n = "co"
              , a = i.data("courier")
              , r = i.data("redirect")
              , l = null;
            t && t.interNationalCityStateMapping && t.interNationalCityStateMapping[$("#country").val()] && t.interNationalCityStateMapping[$("#country").val()].cities && (l = t.interNationalCityStateMapping[$("#country").val()].cities);
            var d = i.data("handlers") ? i.data("handlers").split(",") : []
              , c = function(e, t, o) {
                if (d.length > 0) {
                    i.data("cid", e),
                    i.data("ccode", t),
                    i.data("cccode", o);
                    for (var n in d) {
                        var a = window[d[n].trim()];
                        a && a.constructor === Function && a(s)
                    }
                }
            }
              , h = ($(window).height(),
            i.parents("div").height(),
            i.parents("div").offset().top,
            {});
            h = {
                my: "left top",
                at: "left bottom",
                collision: "none"
            },
            i.autocomplete({
                source: function(e, t) {
                    const s = new RegExp(`${i.val()}`,"i");
                    var n = [];
                    l && (n = l.filter(e=>e.match(s))),
                    o = !!n.length,
                    n.push("Other"),
                    t(n)
                },
                minLength: 0,
                focus: function(e, t) {
                    return i.val(t.item.code),
                    !1
                },
                select: function(e, t) {
                    return e.stopPropagation(),
                    $(".location-input-international").removeClass("error"),
                    $(this).parents("form").find("input[name=location-input-international]").val(t.item.value),
                    pinCheck(),
                    !1
                },
                open: function(e, t) {
                    ($(this).prev("label") || $(this).next("label")).length > 0 ? $("ul.ui-menu").width($(this).parents("div").width()) : $("ul.ui-menu").width($(this).width()),
                    $("ul.ui-menu").css({
                        "z-index": "9999"
                    })
                },
                change: function(t, s) {
                    if (!s.item) {
                        $(".location-input-international").removeClass("error"),
                        console.log("Not selected from dropdown - check if it is valid");
                        var o = i.val().trim().toLowerCase();
                        if (!e) {
                            e = {};
                            for (var r in l)
                                a && n in l[r] ? 1 === l[r][n] && (e[l[r].name.toLowerCase()] = l[r]) : l[r] && (e[l[r].toLowerCase()] = l[r])
                        }
                        o.toLowerCase()in e ? (document.querySelector(".autocomplete-results").style.display = "none",
                        i.val(e[o]),
                        e[o].id && $(this).parents("form").find("input[name=cid]").val(e[o].id),
                        e[o].mprefix && ($(this).parents("form").find("input[name=mprefix]").val(e[o].mprefix),
                        $(this).parents("form").find("span.countryCodeVal").text(e[o].mprefix),
                        $(this).parents("form").find("span.mprefixLabel").text(e[o].mprefix)),
                        $(".location-input-international").removeClass("error"),
                        c(e[o].id, e[o].code, e[o].ccode, e[o].showInput),
                        pinCheck()) : ($(".location-input-international").val(""),
                        $("#p-check-form .pincode-container-items").addClass("error error-animation"),
                        setTimeout(function() {
                            $("#p-check-form .pincode-container-items").removeClass("error-animation")
                        }, 100))
                    }
                },
                position: h
            }).focus(function() {
                $(this).autocomplete("search", "")
            }).autocomplete("instance")._renderItem = function(e, t) {
                var i = "";
                return i += r === !0 ? "<a href='/" + t.url + "'>" + t.code + "</a>" : `<span data-value=${t.value}>` + t.label + "</span>",
                o ? $("<li class='international-countries-cities autocomplete-items redHover'>").append(i).appendTo(e) : $("<li class='autocomplete-items redHover'>").append(i).appendTo(e)
            }
        })
    }(),
    function() {
        var e;
        $(document).on("focusin", "input.suggestCity", function() {
            var t = JSON.parse(sessionStorage.getItem("ccdata"))
              , i = $(this)
              , s = i.data("redirect")
              , o = t.cities;
            i.autocomplete({
                source: function(e, t) {
                    var i = grep(o, function(t) {
                        return t.alias.search(new RegExp("\\b" + e.term,"ig")) !== -1
                    });
                    i = removeDupliactes(i, "name"),
                    t(i)
                },
                minLength: 2,
                focus: function(e, t) {
                    return i.val(t.item.name),
                    !1
                },
                select: function(e, t) {
                    return e.stopPropagation(),
                    s === !0 && (window.location = t.item.url),
                    !1
                },
                open: function(e, t) {
                    $("ul.ui-menu").width($(this).width())
                },
                change: function(t, s) {
                    if (!s.item) {
                        console.log("Not selected from dropdown - check if it is valid");
                        var n = i.val();
                        if (!e) {
                            e = {};
                            for (var a in o)
                                e[o[a].alias.toLowerCase()] = o[a]
                        }
                        n.toLowerCase()in e ? e[n] && i.val(e[n].name) : $(".suggestCountry").val("")
                    }
                }
            }).autocomplete("instance")._renderItem = function(e, t) {
                var i = "";
                return i += s === !0 ? "<a href='/" + t.url + "'>" + t.name + "</a>" : "<span>" + t.name + "</span>",
                $("<li class='autocomplete-items redHover'>").append(i).appendTo(e)
            }
        })
    }(),
    window.onload = function(t) {
        "PL" == window.pgtype && getCountryCity(),
        "1404" != storeid && $.ajax({
            url: "/getmegamenu",
            method: "GET",
            contentType: "application/json; charset=UTF-8",
            success: function(e, t, i) {
                e ? ($("#newMegaMenuTemplate").html(e),
                loadMegaMenuEvents(),
                console.log("success, data fetched")) : console.log("error fetching data")
            },
            error: function(e) {
                console.log("error")
            }
        }),
        setTimeout(function() {
            pushDataLayer({
                event: "page_load_complete"
            })
        }, 2e3);
        var i = $("<script>").attr({
            src: "https://seal.godaddy.com/getSeal?sealID=PieITIxyLQ1t9K6LL2BZlQymdruIjOMfrD4745PQKGdcLfxpe3hBYvRGpbB4"
        });
        $("#siteseal").append(i),
        $("#tp-loader").hide(),
        $(".trending-products-carousel:last").removeClass("hide"),
        $(".no-prod-carousel").slick({
            infinite: !0,
            slidesToShow: 4,
            slidesToScroll: 4,
            accessibility: !1,
            dots: !0,
            arrows: !0
        }).resize(),
        $(".trending-products-carousel:last").slick({
            infinite: !0,
            slidesToShow: 4,
            slidesToScroll: 4,
            accessibility: !1,
            dots: !1,
            arrows: !0
        }).resize(),
        $("#edp-loader").hide(),
        $(".editors-picks-carousel:last").removeClass("hide"),
        $(".editors-picks-carousel:last").slick({
            infinite: !0,
            slidesToShow: 4,
            slidesToScroll: 4,
            accessibility: !1,
            dots: !1,
            arrows: !0
        }).resize(),
        shortListandMakeItExtraSpecialInitializer();
        var s = e("social-lgn");
        if (s) {
            s = JSON.parse(s.substring(s.indexOf(":") + 1));
            let e = {};
            "Success" == s.status && s.data && s.data.user && (s.data.flagNewCustomer ? (e.event = "signup",
            e.mode = s.data.user.platform_used ? s.data.user.platform_used : "googleonetap",
            e.step = "1") : (e.event = "login",
            e.mode = s.data.user.platform_used ? s.data.user.platform_used : "googleonetap"),
            e.email = s.data.user.email ? s.data.user.email : ""),
            dataLayer.push(e)
        }
        "830" != storeid && "1404" != storeid || "home" != pgtype || ($(".home-banner-carousel").find("img")[1] && $(".home-banner-carousel").find("img")[1].src && $(".home-banner-carousel").find("img")[1].src.indexOf("if_ab_banner_var2") !== -1 ? onclickDataLayer("abexperiment_banner", {
            variant_name: "if_ab_banner_var2"
        }) : onclickDataLayer("abexperiment_banner", {
            variant_name: "default"
        }))
    }
    ,
    $(".corporate-modal-container").length) {
        let e = JSON.parse(sessionStorage.getItem("show-corporate-modal"));
        e || setTimeout(function() {
            t(),
            $(".corporate-modal-container").show(),
            sessionStorage.setItem("show-corporate-modal", 1)
        }, 5e3)
    }
    $("#close-modal-btn").click(function() {
        $(".corporate-modal-container").hide()
    }),
    $("#contactFormModalDesktop").click(function() {
        t(),
        $(".corporate-modal-container").toggle()
    }),
    $(document).on("click", ".click-corp-modal", function() {
        $("#contactFormModalDesktop").trigger("click")
    }),
    setTimeout(function() {
        getDefaultSearchTemplate(function(e) {
            $(".morphsearch-content").html(e)
        })
    }, 10),
    $(window).on("scroll", getDataOnScroll),
    $(".search-bar").keyup(function() {
        var e = !1;
        $(".search-bar").each(function() {
            0 == $(this).val().length && (e = !0)
        }),
        e ? ($(".morphsearch-submit").attr("disabled", "disabled"),
        $(".autocomplete-section").hide(),
        $(".morphsearch-content").show()) : ($(".morphsearch-submit").removeAttr("disabled"),
        $(".morphsearch-content").hide(),
        $(".autocomplete-section").show())
    }),
    $('input[type="number"]').on("input", function(e) {
        $(this).val().length > $(this).attr("maxlength") && $(this).val($(this).val().slice(0, $(this).attr("maxlength")))
    }),
    $(".read-more").click(function() {
        "Show more" == $(this).text() ? ($(".top-footer").css({
            height: "auto"
        }),
        $(this).text("Show less"),
        $("html,body").animate({
            scrollTop: $(".top-footer").offset().top - 150
        })) : ($(".top-footer").css({
            height: "200px"
        }),
        $(this).text("Show more"),
        $("html,body").animate({
            scrollTop: $(".top-footer").offset().top - ($(window).height() - $(".top-footer").height() - 100)
        }))
    }),
    0 == $(".ptList").length && $("#ptListId").hide(),
    $("#c-check-email").on("submit", function(e) {
        if (e.preventDefault(),
        !$.fn.fmValidate.init("#c-check-email"))
            return void $(".subscription-main-errorEmail").removeClass("hide");
        onclickDataLayer("userformsubmit", {
            formtype: "Newsletter Subscription"
        }),
        $.ajax({
            url: "/api/user/subscribe",
            method: "POST",
            data: JSON.stringify({
                email: $("#c-s-user1").val()
            }),
            cache: !0,
            contentType: "application/json; charset=UTF-8",
            beforeSend: function(e) {},
            success: function(e, t, i) {
                e.status && "success" == e.status.toLowerCase() ? (window.dataLayer = window.dataLayer || [],
                window.dataLayer.push({
                    event: "userformsubmit",
                    formtype: "Newsletter Subscription",
                    uemail1: $("#c-s-user1").val()
                }),
                $(".subscription-main-successPara").removeClass("hide"),
                $(".subscription-main-inpbtn").addClass("hide"),
                $(".width-100").addClass("hide"),
                $(".subscription-main-header").addClass("hide"),
                $(".subscription-main-errorEmail").addClass("hide"),
                $("head").append('<meta name="email" id="semail" content="' + $("#c-s-user1").val() + '">')) : ($(".subscription-main-inpbtn").addClass("hide"),
                $(".width-100").addClass("hide"),
                $(".subscription-main-header").addClass("hide"),
                $(".subscription-main-errorPara").removeClass("hide"),
                $(".subscription-main-errorEmail").addClass("hide"))
            },
            error: function(e) {
                $(".subscription-main-inpbtn").addClass("hide"),
                $(".subscription-main-header").addClass("hide"),
                $(".subscription-main-errorEmail").addClass("hide"),
                console.log("error : " + JSON.stringify(e))
            }
        })
    }),
    $(".read-more-au").click(function() {
        this.previousElementSibling.style.display = "block",
        this.previousElementSibling.style.height = "100px",
        this.previousElementSibling.style.overflow = "auto",
        $(this).addClass("hidden")
    });
    try {
        var i = sessionStorage.getItem("cart-count")
    } catch (e) {
        var i = ""
    }
    if (i && parseInt(i) && $(".cart-count").html(i),
    $(".footer-blogs-cont").length && window.addEventListener("scroll", function() {
        $(".footer-blog-tile").length > 3 ? $(".footer-blogs-cont")[0].classList.value.indexOf("slick-initialized") === -1 && ($(".footer-blogs-cont").removeClass("three-blog"),
        $(".footer-blogs-cont").slick({
            infinite: !0,
            autoplay: !1,
            slidesToShow: 3,
            slidesToScroll: 3,
            dots: !1,
            arrows: !0,
            prevArrow: `<button type='button' class='slick-prev'>
                                    <img class="lazy-load-image" alt="Left arrow icon" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" data-original="${cdn.assetsURL}svg-icons/blog-left.svg" />
                                    </button>`,
            nextArrow: `<button type='button' class='slick-next'>
                                        <img class="lazy-load-image" alt="Right arrow icon" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" data-original="${cdn.assetsURL}svg-icons/blog-right.svg" />
                                    </button>`
        })) : $(".footer-blogs-cont").addClass("three-blog")
    }),
    "5" == storeid && ($("body").data("ishome") || "PL" == window.pgtype) && "Business" != window.type2) {
        let e = $("#userCountry").text();
        e && "AE" == e && !sessionStorage.getItem("redirection_popup_visited") && $.ajax({
            url: "/getRedirection",
            method: "GET",
            contentType: "application/json; charset=UTF-8",
            success: function(e) {
                if (e) {
                    console.log("data fetched"),
                    $(".site-wrapper-desk").append(e),
                    $("html, body").addClass("no-scroll"),
                    $("#sl-overlay").addClass("active");
                    pushDataLayer({
                        event: "redirection_popup_impression"
                    })
                }
            }
        })
    }
    if ($(document).on("click", ".re-close-button", function(e) {
        $(".redirect_container").addClass("hide"),
        $("html, body").removeClass("no-scroll"),
        $("#sl-overlay").removeClass("active"),
        sessionStorage.setItem("redirection_popup_visited", "true")
    }),
    $("input[name=web-initial-traffic-source]").length) {
        var s = e("initialTrafficSource");
        $("input[name=web-initial-traffic-source]").val(s)
    }
    $(document).on("click", ".collections", function() {
        let e = {
            search_term: $(this).data("trendingsearch") ? $(this).data("trendingsearch") : "",
            search_section: "Default Suggestions",
            section_name: $(this).data("section_name"),
            item_name: $(this).data("trendingsearch"),
            item_position: $(this).index() + 1,
            item_url: "Trending" == $(this).data("section_name") ? `${window.location.hostname}/search?${$(this).data("trendingsearch")}` : `${window.location.hostname + $(this).attr("href")}`,
            search_suggestion_selected: !0
        };
        localStorage.setItem("searchEvent", JSON.stringify(e))
    }),
    $(document).on("click", ".header-container", function(e) {
        $(".searched-text-container").hasClass("hide") || e.target.closest("#morphsearch") || $(".searched-text-container").addClass("hide")
    })
}),
function(e) {
    function t(e, t) {
        this.bearer = e,
        this.options = t,
        this.hideEvent,
        this.mouseOverMode = "hover" == this.options.trigger || "mouseover" == this.options.trigger || "onmouseover" == this.options.trigger
    }
    t.prototype = {
        show: function() {
            var e = this;
            this.options.modal && this.modalLayer.css("display", "block"),
            this.tooltip.css("display", "block"),
            e.mouseOverMode && (this.tooltip.mouseover(function() {
                clearTimeout(e.hideEvent)
            }),
            this.tooltip.mouseout(function() {
                clearTimeout(e.hideEvent),
                e.hide()
            }))
        },
        hide: function() {
            var e = this;
            this.hideEvent = setTimeout(function() {
                e.tooltip.hide()
            }, 100),
            e.options.modal && e.modalLayer.hide(),
            this.options.onClose()
        },
        toggle: function() {
            this.tooltip.is(":visible") ? this.hide() : this.show()
        },
        addAnimation: function() {
            switch (this.options.animation) {
            case "none":
                break;
            case "fadeIn":
                this.tooltip.addClass("animated"),
                this.tooltip.addClass("fadeIn");
                break;
            case "flipIn":
                this.tooltip.addClass("animated"),
                this.tooltip.addClass("flipIn")
            }
        },
        setContent: function() {
            if (e(this.bearer).css("cursor", "pointer"),
            this.options.content)
                this.content = this.options.content;
            else {
                if (!this.bearer.attr("data-tooltip"))
                    return;
                this.content = this.bearer.attr("data-tooltip")
            }
            if ("#" == this.content.charAt(0)) {
                if (this.options.delete_content) {
                    var t = e(this.content).html();
                    e(this.content).html(""),
                    this.content = t
                } else
                    e(this.content).hide(),
                    this.content = e(this.content).html();
                this.contentType = "html"
            } else
                this.contentType = "text";
            var i = "";
            "" != this.bearer.attr("id") && (i = "id='darktooltip-" + this.bearer.attr("id") + "'"),
            this.modalLayer = e("<ins class='darktooltip-modal-layer'></ins>"),
            this.tooltip = e("<ins " + i + " class = 'dark-tooltip " + this.options.theme + " " + this.options.size + " " + this.options.gravity + "'><div>" + this.content + "</div><div class = 'tip'></div></ins>"),
            this.tip = this.tooltip.find(".tip"),
            e("body").append(this.modalLayer),
            e("body").append(this.tooltip),
            "html" == this.contentType && this.tooltip.css("max-width", "none"),
            this.tooltip.css("opacity", this.options.opacity),
            this.addAnimation(),
            this.options.confirm && this.addConfirm()
        },
        setPositions: function() {
            var t = this.bearer.offset().left
              , i = this.bearer.offset().top;
            switch (this.options.gravity) {
            case "south":
                t += this.bearer.outerWidth() / 2 - this.tooltip.outerWidth() / 2,
                i += -this.tooltip.outerHeight() - this.tip.outerHeight() / 2,
                i -= 12;
                break;
            case "west":
                t += this.bearer.outerWidth() + this.tip.outerWidth() / 2,
                i += this.bearer.outerHeight() / 2 - this.tooltip.outerHeight() / 2;
                break;
            case "north":
                t += this.bearer.outerWidth() / 2 - this.tooltip.outerWidth() / 2,
                i += this.bearer.outerHeight() + this.tip.outerHeight() / 2;
                break;
            case "east":
                t += -this.tooltip.outerWidth() - this.tip.outerWidth() / 2,
                i += this.bearer.outerHeight() / 2 - this.tooltip.outerHeight() / 2
            }
            this.options.autoLeft && (t < 0 ? (t = 10,
            e("#darktooltip-gs.dark-tooltip.south.small .tip").css("margin-left", "-73px"),
            this.tooltip.css("left", t)) : t > 850 ? (this.tooltip.css("width", "22%"),
            this.tooltip.css("padding-left", "3px"),
            this.tooltip.css("padding-right", "3px"),
            this.tooltip.css("left", "78%"),
            this.tooltip.find(".tip").css("margin-left", "4%")) : this.tooltip.css("left", t)),
            this.options.autoTop && this.tooltip.css("top", i)
        },
        setEvents: function() {
            var t, i = this, s = i.options.hoverDelay;
            i.mouseOverMode ? this.bearer.mouseenter(function() {
                t = setTimeout(function() {
                    i.setPositions(),
                    i.show()
                }, s)
            }).mouseleave(function() {
                clearTimeout(t),
                i.hide()
            }) : "click" != this.options.trigger && "onclik" != this.options.trigger || (this.tooltip.click(function(e) {
                e.stopPropagation()
            }),
            this.bearer.click(function(e) {
                e.preventDefault(),
                i.setPositions(),
                i.toggle(),
                e.stopPropagation()
            }),
            e("html").click(function() {
                i.hide()
            }))
        },
        activate: function() {
            this.setContent(),
            this.content && this.setEvents()
        },
        addConfirm: function() {
            this.tooltip.append("<ul class = 'confirm'><li class = 'darktooltip-yes'>" + this.options.yes + "</li><li class = 'darktooltip-no'>" + this.options.no + "</li></ul>"),
            this.setConfirmEvents()
        },
        setConfirmEvents: function() {
            var e = this;
            this.tooltip.find("li.darktooltip-yes").click(function(t) {
                e.onYes(),
                t.stopPropagation()
            }),
            this.tooltip.find("li.darktooltip-no").click(function(t) {
                e.onNo(),
                t.stopPropagation()
            })
        },
        finalMessage: function() {
            if (this.options.finalMessage) {
                var e = this;
                e.tooltip.find("div:first").html(this.options.finalMessage),
                e.tooltip.find("ul").remove(),
                e.setPositions(),
                setTimeout(function() {
                    e.hide(),
                    e.setContent()
                }, e.options.finalMessageDuration)
            } else
                this.hide()
        },
        onYes: function() {
            this.options.onYes(this.bearer),
            this.finalMessage()
        },
        onNo: function() {
            this.options.onNo(this.bearer),
            this.hide()
        }
    },
    e.fn.darkTooltip = function(i) {
        return this.each(function() {
            i = e.extend({}, e.fn.darkTooltip.defaults, i),
            new t(e(this),i).activate()
        })
    }
    ,
    e.fn.darkTooltip.defaults = {
        animation: "none",
        confirm: !1,
        content: "",
        finalMessage: "",
        finalMessageDuration: 1e3,
        gravity: "south",
        hoverDelay: 0,
        modal: !1,
        no: "No",
        onNo: function() {},
        onYes: function() {},
        opacity: .9,
        size: "medium",
        theme: "dark",
        trigger: "hover",
        yes: "Yes",
        autoTop: !0,
        autoLeft: !0,
        onClose: function() {}
    }
}(jQuery),
function(e) {
    function t(t) {
        e(t).find(o).addClass("active"),
        e(t).find(s).addClass("active")
    }
    function i() {
        e(o).removeClass("active"),
        e(s).removeClass("active")
    }
    var s = ".c-dd-options-w"
      , o = ".c-dd-text > span.arrow";
    e(".c-dd").click(function(o) {
        o = o || window.event,
        o.stopPropagation ? o.stopPropagation() : o.cancelBubble = !0,
        e(s).hasClass("active") ? e(this).find(s).hasClass("active") ? i() : (i(),
        t(this)) : t(this)
    }),
    e(".c-dd-options li").click(function(t) {
        t = t || window.event,
        t.stopPropagation ? t.stopPropagation() : t.cancelBubble = !0;
        var s = (e(this).data("value"),
        e(this).data("text"));
        e(e(this).parents(".c-dd").find(".c-dd-text > span.c-dd-s-text")).text(s),
        i()
    }),
    e(document).click(function() {
        i()
    })
}(jQuery),
function(e) {
    function t(t, i, s, o) {
        e.ajax({
            url: "/ipcart/update",
            method: "DELETE",
            data: JSON.stringify(i),
            contentType: "application/json; charset=UTF-8",
            async: !0,
            cache: !0,
            beforeSend: function(e) {
                s.find(".ip-c-item-overlay").addClass("c-show")
            },
            success: function(e, t, i) {
                o(e)
            },
            error: function(e) {
                console.log("error : " + JSON.stringify(e))
            }
        })
    }
    function i(t, i, s, o) {
        e.ajax({
            url: "/ipcart/update",
            method: "PUT",
            data: JSON.stringify(i),
            contentType: "application/json; charset=UTF-8",
            async: !0,
            cache: !0,
            beforeSend: function(e) {
                s.find(".ip-c-item-overlay").addClass("c-show")
            },
            success: function(t, i, s) {
                e(".cart-count").html(t.icnt ? t.icnt : 0),
                o(t)
            },
            error: function(e) {
                console.log("error : " + JSON.stringify(e))
            }
        })
    }
    function s(e) {
        if ("0" === e || 0 === e)
            return e;
        var t = e.split("-")
          , i = t[1] + " " + t[0] + ", " + t[2]
          , s = new Date(i)
          , e = s.getDate();
        e < 10 && (e = "0" + e),
        e = e.toString();
        var o = s.getFullYear().toString()
          , n = s.getMonth() + 1;
        return n < 10 && (n = "0" + n),
        n = n.toString(),
        o + "" + n + e
    }
    e(document).on("click", ".r-ip-c-item", function() {
        e(this).parents(".cart-item-card").find(".c-item-overlay").addClass("c-show")
    }),
    e(document).on("click", ".close-ip-item-overlay", function() {
        var t = e(this).parents(".cart-item-card")
          , i = t.find(".ip-qty").attr("data-qty");
        t.find(".ip-qty").val(parseInt(i)),
        t.find(".c-item-overlay").removeClass("c-show")
    }),
    window.currentProdIdDeleted = !1,
    e(document).on("click", ".r-ip-item", function() {
        var i = e(this).data("pid")
          , s = e(".prod-id").val();
        e(".prod-id").length && s == i && (window.currentProdIdDeleted = !0);
        var o = e(this).parents(".cart-prdct").data("pname")
          , n = e(this).parents(".cart-prdct").data("pprice")
          , a = e(this).parents(".cart-prdct").data("pqty")
          , r = gaProductDetail(o, i, n, a)
          , l = e(this).parents(".cart-item-card")
          , i = l.find(".ip-c-form > input[name=pid]").val()
          , d = l.find(".ip-c-form > input[name=persid]").val()
          , c = l.find(".ip-c-form > input[name=attr]").val();
        c = JSON.parse(c),
        t(i, {
            persid: d,
            pid: i,
            attr: c
        }, l, function(t) {
            gaProdRemoveCart(r),
            e("#cart").html(t),
            e(".cart-count").html(e("#cart #c-total-count").length ? e("#cart #c-total-count").html() : 0);
            var i = parseInt(e("#cart #c-total-count").length ? e("#cart #c-total-count").html() : 0);
            sessionStorage.setItem("cart-count", i),
            e(".c-i-desc-clamp").each(function(e, t) {
                $clamp(t, {
                    clamp: 3
                })
            }),
            e(".cart-list").height(e("#cart").height() - (e(".s-cart-header").height() + e(".cart-b-content").height()))
        });
        let h = !1
          , u = 0;
        e(".cart-items-list > .cart-prdct").each(function() {
            "main" == e(this).data("prods-type") ? h = o != e(this).data("pname") : u += e(this).data("pprice") * e(this).data("pqty")
        }),
        "main" !== e(this).parents(".cart-prdct").data("prods-type") && (u -= n * e(this).parents(".cart-prdct").data("pqty")),
        pushDataLayer({
            event: "remove_cart",
            prods_id: parseInt(i),
            prods_name: o,
            prods_sku: e(this).parents(".cart-prdct").data("sku"),
            prods_price: n,
            prods_type: "72" == e(this).parents(".cart-prdct").data("ptype") ? "Handels" : "Courier",
            prods_quantity: e(this).parents(".cart-prdct").data("pqty"),
            cart_product_type: "main" == e(this).parents(".cart-prdct").data("prods-type") ? "Primary" : "Addon",
            primary_product_available: h,
            addons_value: u,
            barcodes: e(this).parents(".cart-prdct").data("barcode"),
            is_promoted: ""
        })
    }),
    e(document).on("click", ".qty-add", function() {
        var t = e(this).data("pid")
          , o = e(this).parents(".cart-item-card")
          , n = o.find(".ip-c-form")
          , a = parseInt(o.find(".ip-qty").val())
          , r = processData(n.serializeArray())
          , l = JSON.parse(r);
        l.qty = a + 1,
        l.attr = JSON.parse(l.attr),
        l.sdate = s(l.sdate);
        o.find(".ip-qty").removeClass("add-error"),
        i(t, l, o, function(i) {
            if (i) {
                if (i.plist && i.plist.some(e=>{
                    return Number(e.qty) >= 25
                }
                ) ? e("#bulkText") && e("#bulkText").length > 0 && e("#bulkText").html("( Bulk order discount will be applied on checkout )") : e("#bulkText").html(""),
                i && i.plist) {
                    var s = 0;
                    i.plist.forEach(e=>{
                        e.qty && (s += e.qty)
                    }
                    )
                }
                sessionStorage.setItem("cart-count", s);
                for (var n in i.plist)
                    t == i.plist[n].p.id && JSON.stringify(l.attr) == JSON.stringify(i.plist[n].attr) && (o.find(".ip-c-item-overlay").removeClass("c-show"),
                    o.find(".ip-qty").val(parseInt(i.plist[n].qty)),
                    o.find(".ip-qty").attr("data-qty", i.plist[n].qty),
                    o.find(".ip-c-form > input[name=qty]").val(i.plist[n].qty),
                    e("#c-total-val").text(getCartPagePrice(i, "total", currency)),
                    e("#c-total-count").text(i.icnt))
            }
        }),
        pushDataLayer({
            event: "update_cart",
            card_prods_type: "main" == l.ptype ? "Primary" : "Addon",
            current_quantity: l.qty - 1,
            updated_quantity: l.qty,
            prods_id: parseInt(l.pid),
            prods_type: "72" == e(this).parents(".cart-prdct").data("ptype") ? "Handels" : "Courier",
            barcodes: e(this).parents(".cart-prdct").data("barcode"),
            is_promoted: l.is_promoted,
            promoted_tag: l.promoted_tag
        })
    }),
    e(document).on("click", ".qty-sub", function() {
        var t = e(this).data("pid")
          , o = e(this).parents(".cart-item-card")
          , n = o.find(".ip-c-form")
          , a = parseInt(o.find(".ip-qty").val())
          , r = processData(n.serializeArray());
        if (a > 1) {
            o.find(".ip-qty").removeClass("add-error");
            var l = JSON.parse(r);
            l.qty = a - 1,
            l.attr = JSON.parse(l.attr),
            l.sdate = s(l.sdate),
            i(t, l, o, function(i) {
                if (i) {
                    if (i.plist && i.plist.some(e=>{
                        return Number(e.qty) >= 25
                    }
                    ) ? e("#bulkText") && e("#bulkText").length > 0 && e("#bulkText").html("( Bulk order discount will be applied on checkout )") : e("#bulkText").html(""),
                    i && i.plist) {
                        var s = 0;
                        i.plist.forEach(e=>{
                            e.qty && (s += e.qty)
                        }
                        )
                    }
                    sessionStorage.setItem("cart-count", s);
                    for (var n in i.plist)
                        t == i.plist[n].p.id && JSON.stringify(l.attr) == JSON.stringify(i.plist[n].attr) && (o.find(".ip-c-item-overlay").removeClass("c-show"),
                        o.find(".ip-qty").val(parseInt(i.plist[n].qty)),
                        o.find(".ip-qty").attr("data-qty", i.plist[n].qty),
                        o.find(".ip-c-form > input[name=qty]").val(i.plist[n].qty),
                        e("#c-total-val").text(getCartPagePrice(i, "total", currency)),
                        e("#c-total-count").text(i.icnt))
                }
            })
        } else if (1 == a) {
            o.find(".ip-qty").removeClass("add-error");
            var t = e(this).data("pid");
            o.find(".c-item-overlay").addClass("c-show")
        } else
            o.find(".ip-qty").addClass("add-error add-error-animation"),
            setTimeout(function() {
                o.find(".ip-qty").removeClass("add-error-animation")
            }, 300);
        pushDataLayer({
            event: "update_cart",
            card_prods_type: "main" == l.ptype ? "Primary" : "Addon",
            current_quantity: l.qty + 1,
            updated_quantity: l.qty,
            prods_id: parseInt(l.pid),
            prods_type: "72" == e(this).parents(".cart-prdct").data("ptype") ? "Handels" : "Courier",
            barcodes: e(this).parents(".cart-prdct").data("barcode"),
            is_promoted: l.is_promoted,
            promoted_tag: l.promoted_tag
        })
    }),
    e(document).on("keypress", "input[type=text].ip-qty", function(e) {
        for (var t = [], i = e.which, s = 48; s < 58; s++)
            t.push(s);
        t.indexOf(i) >= 0 || e.preventDefault()
    }),
    e(document).on("keypress", ".ip-qty", function(t) {
        if (13 == t.keyCode) {
            var o = e(this).data("pid")
              , n = e(this).parents(".cart-item-card")
              , a = n.find(".ip-c-form")
              , r = parseInt(n.find(".ip-qty").val())
              , l = processData(a.serializeArray())
              , d = c.qty;
            if (r > 0) {
                var l = processData(e("#ip-c-form-" + o).serializeArray())
                  , c = JSON.parse(l);
                c.qty = r,
                c.attr = JSON.parse(c.attr),
                c.sdate = s(c.sdate),
                n.find(".ip-qty").removeClass("add-error"),
                i(o, c, n, function(t) {
                    if (t)
                        for (var i in t.plist)
                            o == t.plist[i].p.id && JSON.stringify(c.attr) == JSON.stringify(t.plist[i].attr) && (n.find(".ip-c-item-overlay").removeClass("c-show"),
                            n.find(".ip-qty").val(parseInt(t.plist[i].qty)),
                            n.find(".ip-qty").attr("data-qty", t.plist[i].qty),
                            n.find(".ip-qty").blur(),
                            n.find(".ip-c-form > input[name=qty]").val(t.plist[i].qty),
                            e("#c-total-val").text(getCartPagePrice(t, "total", currency)),
                            e("#c-total-count").text(t.icnt))
                })
            } else
                0 == r && n.find(".c-item-overlay").addClass("c-show");
            let t = {
                event: "update_cart",
                card_prods_type: "main" == c.ptype ? "Primary" : "Addon",
                current_quantity: d,
                updated_quantity: c.qty,
                prods_id: parseInt(c.pid),
                prods_type: "72" == e(this).parents(".cart-prdct").data("ptype") ? "Handels" : "Courier",
                barcodes: e(this).parents(".cart-prdct").data("barcode"),
                is_promoted: c.is_promoted,
                promoted_tag: c.promoted_tag
            };
            pushDataLayer(t)
        }
    }),
    e(document).on("focusout", ".ip-qty", function(t) {
        var o = e(this).data("pid")
          , n = e(this).parents(".cart-item-card")
          , a = n.find(".ip-c-form")
          , r = n.find(".ip-qty").val()
          , l = parseInt(r)
          , d = e(this).attr("data-qty")
          , c = u.qty;
        if ("" == r)
            e(this).val(parseInt(d));
        else if (l != d) {
            var a = n.find(".ip-c-form")
              , h = processData(a.serializeArray())
              , u = JSON.parse(h);
            u.qty = l,
            u.attr = JSON.parse(u.attr),
            u.sdate = s(u.sdate);
            0 == u.qty ? n.find(".c-item-overlay").addClass("c-show") : (n.find(".ip-qty").removeClass("add-error"),
            i(o, u, n, function(t) {
                if (t) {
                    t.plist && t.plist.some(e=>{
                        return Number(e.qty) >= 25
                    }
                    ) ? e("#bulkText") && e("#bulkText").length > 0 && e("#bulkText").html("( Bulk order discount will be applied on checkout )") : e("#bulkText").html("");
                    for (var i in t.plist)
                        o == t.plist[i].p.id && JSON.stringify(u.attr) == JSON.stringify(t.plist[i].attr) && (n.find(".ip-c-item-overlay").removeClass("c-show"),
                        n.find(".ip-qty").val(parseInt(t.plist[i].qty)),
                        n.find(".ip-qty").attr("data-qty", t.plist[i].qty),
                        n.find(".ip-c-form > input[name=qty]").val(t.plist[i].qty),
                        e("#c-total-val").text(getCartPagePrice(t, "total", currency)),
                        e("#c-total-count").text(t.icnt))
                }
            }))
        }
        pushDataLayer({
            event: "update_cart",
            card_prods_type: "main" == u.ptype ? "Primary" : "Addon",
            current_quantity: c,
            updated_quantity: l,
            prods_id: parseInt(u.pid),
            prods_type: "72" == e(this).parents(".cart-prdct").data("ptype") ? "Handels" : "Courier",
            barcodes: e(this).parents(".cart-prdct").data("barcode"),
            is_promoted: u.is_promoted,
            promoted_tag: u.promoted_tag
        })
    })
}(jQuery),
function() {
    function e(e, t) {
        function i(e, t) {
            return c.getComputedStyle || (c.getComputedStyle = function(e, t) {
                return this.el = e,
                this.getPropertyValue = function(t) {
                    var i = /(\-([a-z]){1})/g;
                    return "float" == t && (t = "styleFloat"),
                    i.test(t) && (t = t.replace(i, function() {
                        return arguments[2].toUpperCase()
                    })),
                    e.currentStyle && e.currentStyle[t] ? e.currentStyle[t] : null
                }
                ,
                this
            }
            ),
            c.getComputedStyle(e, null).getPropertyValue(t)
        }
        function s(t) {
            var i = t || e.clientHeight
              , s = n(e);
            return Math.max(Math.floor(i / s), 0)
        }
        function o(t) {
            return n(e) * t
        }
        function n(e) {
            var t = i(e, "line-height");
            return "normal" == t && (t = 1.2 * parseInt(i(e, "font-size"))),
            parseInt(t)
        }
        function a(t) {
            return t.lastChild.children && t.lastChild.children.length > 0 ? a(Array.prototype.slice.call(t.children).pop()) : t.lastChild && t.lastChild.nodeValue && "" != t.lastChild.nodeValue && t.lastChild.nodeValue != h.truncationChar ? t.lastChild : (t.lastChild.parentNode.removeChild(t.lastChild),
            a(e))
        }
        function r(t, i) {
            function s() {
                $ = h.splitOnChars.slice(0),
                w = $[0],
                v = null,
                y = null
            }
            if (i) {
                var o = t.nodeValue.replace(h.truncationChar, "");
                if (v || (w = $.length > 0 ? $.shift() : "",
                v = o.split(w)),
                v.length > 1 ? (y = v.pop(),
                l(t, v.join(w))) : v = null,
                d && (t.nodeValue = t.nodeValue.replace(h.truncationChar, ""),
                e.innerHTML = t.nodeValue + " " + d.innerHTML + h.truncationChar),
                v) {
                    if (e.clientHeight <= i) {
                        if (!($.length >= 0 && "" != w))
                            return e.innerHTML;
                        l(t, v.join(w) + w + y),
                        v = null
                    }
                } else
                    "" == w && (l(t, ""),
                    t = a(e),
                    s());
                if (!h.animate)
                    return r(t, i);
                setTimeout(function() {
                    r(t, i)
                }, h.animate === !0 ? 10 : h.animate)
            }
        }
        function l(e, t) {
            e.nodeValue = t + h.truncationChar
        }
        t = t || {};
        var d, c = window, h = {
            clamp: t.clamp || 2,
            useNativeClamp: void 0 === t.useNativeClamp || t.useNativeClamp,
            splitOnChars: t.splitOnChars || [".", "-", "�", "�", " "],
            animate: t.animate || !1,
            truncationChar: t.truncationChar || "�",
            truncationHTML: t.truncationHTML
        }, u = e.style, p = e.innerHTML, m = void 0 !== e.style.webkitLineClamp, f = h.clamp, g = f.indexOf && (f.indexOf("px") > -1 || f.indexOf("em") > -1);
        h.truncationHTML && (d = document.createElement("span"),
        d.innerHTML = h.truncationHTML);
        var v, y, $ = h.splitOnChars.slice(0), w = $[0];
        "auto" == f ? f = s() : g && (f = s(parseInt(f)));
        var b;
        if (m && h.useNativeClamp)
            g && (u.height = h.clamp + "px");
        else {
            var C = o(f);
            C <= e.clientHeight && (b = r(a(e), C))
        }
        return {
            original: p,
            clamped: b
        }
    }
    window.$clamp = e
}(),
function(e, t) {
    "function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t() : e.NProgress = t()
}(this, function() {
    function e(e, t, i) {
        return e < t ? t : e > i ? i : e
    }
    function t(e) {
        return 100 * (-1 + e)
    }
    function i(e, i, s) {
        var o;
        return o = "translate3d" === d.positionUsing ? {
            transform: "translate3d(" + t(e) + "%,0,0)"
        } : "translate" === d.positionUsing ? {
            transform: "translate(" + t(e) + "%,0)"
        } : {
            "margin-left": t(e) + "%"
        },
        o.transition = "all " + i + "ms " + s,
        o
    }
    function s(e, t) {
        return ("string" == typeof e ? e : a(e)).indexOf(" " + t + " ") >= 0
    }
    function o(e, t) {
        var i = a(e)
          , o = i + t;
        s(i, t) || (e.className = o.substring(1))
    }
    function n(e, t) {
        var i, o = a(e);
        s(e, t) && (i = o.replace(" " + t + " ", " "),
        e.className = i.substring(1, i.length - 1))
    }
    function a(e) {
        return (" " + (e && e.className || "") + " ").replace(/\s+/gi, " ")
    }
    function r(e) {
        e && e.parentNode && e.parentNode.removeChild(e)
    }
    var l = {};
    l.version = "0.2.0";
    var d = l.settings = {
        minimum: .08,
        easing: "linear",
        positionUsing: "",
        speed: 350,
        trickle: !0,
        trickleSpeed: 250,
        showSpinner: !0,
        barSelector: '[role="bar"]',
        spinnerSelector: '[role="spinner"]',
        parent: "body",
        template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
    };
    l.configure = function(e) {
        var t, i;
        for (t in e)
            void 0 !== (i = e[t]) && e.hasOwnProperty(t) && (d[t] = i);
        return this
    }
    ,
    l.status = null,
    l.set = function(t) {
        var s = l.isStarted();
        t = e(t, d.minimum, 1),
        l.status = 1 === t ? null : t;
        var o = l.render(!s)
          , n = o.querySelector(d.barSelector)
          , a = d.speed
          , r = d.easing;
        return o.offsetWidth,
        c(function(e) {
            "" === d.positionUsing && (d.positionUsing = l.getPositioningCSS()),
            h(n, i(t, a, r)),
            1 === t ? (h(o, {
                transition: "none",
                opacity: 1
            }),
            o.offsetWidth,
            setTimeout(function() {
                h(o, {
                    transition: "all " + a + "ms linear",
                    opacity: 0
                }),
                setTimeout(function() {
                    l.remove(),
                    e()
                }, a)
            }, a)) : setTimeout(e, a)
        }),
        this
    }
    ,
    l.isStarted = function() {
        return "number" == typeof l.status
    }
    ,
    l.start = function() {
        l.status || l.set(0);
        var e = function() {
            setTimeout(function() {
                l.status && (l.trickle(),
                e())
            }, d.trickleSpeed)
        };
        return d.trickle && e(),
        this
    }
    ,
    l.done = function(e) {
        return e || l.status ? l.inc(.3 + .5 * Math.random()).set(1) : this
    }
    ,
    l.inc = function(t) {
        var i = l.status;
        return i ? i > 1 ? void 0 : ("number" != typeof t && (t = i >= 0 && i < .25 ? (3 * Math.random() + 3) / 100 : i >= .25 && i < .65 ? 3 * Math.random() / 100 : i >= .65 && i < .9 ? 2 * Math.random() / 100 : i >= .9 && i < .99 ? .005 : 0),
        i = e(i + t, 0, .994),
        l.set(i)) : l.start()
    }
    ,
    l.trickle = function() {
        return l.inc()
    }
    ,
    function() {
        var e = 0
          , t = 0;
        l.promise = function(i) {
            return i && "resolved" !== i.state() ? (0 === t && l.start(),
            e++,
            t++,
            i.always(function() {
                t--,
                0 === t ? (e = 0,
                l.done()) : l.set((e - t) / e)
            }),
            this) : this
        }
    }(),
    l.render = function(e) {
        if (l.isRendered())
            return document.getElementById("nprogress");
        o(document.documentElement, "nprogress-busy");
        var i = document.createElement("div");
        i.id = "nprogress",
        i.innerHTML = d.template;
        var s, n = i.querySelector(d.barSelector), a = e ? "-100" : t(l.status || 0), c = document.querySelector(d.parent);
        return h(n, {
            transition: "all 0 linear",
            transform: "translate3d(" + a + "%,0,0)"
        }),
        d.showSpinner || (s = i.querySelector(d.spinnerSelector)) && r(s),
        c != document.body && o(c, "nprogress-custom-parent"),
        c.appendChild(i),
        i
    }
    ,
    l.remove = function() {
        n(document.documentElement, "nprogress-busy"),
        n(document.querySelector(d.parent), "nprogress-custom-parent");
        var e = document.getElementById("nprogress");
        e && r(e)
    }
    ,
    l.isRendered = function() {
        return !!document.getElementById("nprogress")
    }
    ,
    l.getPositioningCSS = function() {
        var e = document.body.style
          , t = "WebkitTransform"in e ? "Webkit" : "MozTransform"in e ? "Moz" : "msTransform"in e ? "ms" : "OTransform"in e ? "O" : "";
        return t + "Perspective"in e ? "translate3d" : t + "Transform"in e ? "translate" : "margin"
    }
    ;
    var c = function() {
        function e() {
            var i = t.shift();
            i && i(e)
        }
        var t = [];
        return function(i) {
            t.push(i),
            1 == t.length && e()
        }
    }()
      , h = function() {
        function e(e) {
            return e.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, function(e, t) {
                return t.toUpperCase()
            })
        }
        function t(e) {
            var t = document.body.style;
            if (e in t)
                return e;
            for (var i, s = o.length, n = e.charAt(0).toUpperCase() + e.slice(1); s--; )
                if ((i = o[s] + n)in t)
                    return i;
            return e
        }
        function i(i) {
            return i = e(i),
            n[i] || (n[i] = t(i))
        }
        function s(e, t, s) {
            t = i(t),
            e.style[t] = s
        }
        var o = ["Webkit", "O", "Moz", "ms"]
          , n = {};
        return function(e, t) {
            var i, o, n = arguments;
            if (2 == n.length)
                for (i in t)
                    void 0 !== (o = t[i]) && t.hasOwnProperty(i) && s(e, i, o);
            else
                s(e, n[1], n[2])
        }
    }();
    return l
});
var chkChatStarted = function() {
    setTimeout(function() {
        0 !== $("#lc_chat_message_window").text().length ? $(".icon-chat").css({
            display: "table"
        }) : $(".icon-chat").css({
            display: "none"
        })
    }, 1e3)
};
window.addEventListener ? window.addEventListener("DOMContentLoaded", chkChatStarted) : window.attachEvent("onload", chkChatStarted),
$(document).on("click", ".chat-me", function() {
    window.fcWidget.open(),
    window.fcWidget.show(),
    $(".dialpad-content").removeClass("active")
}),
$(document).on("click", "#lc_chat_header", function(e) {
    $("#lc_chat_layout").css({
        height: "43px"
    }),
    $("#lc_chat_layout").addClass("lc-collapsed").removeClass("lc-expanded"),
    e.stopImmediatePropagation()
}),
$(document).on("click", "#lc_minimize", function() {
    minimizeChat(),
    0 !== $("#lc_chat_message_window").text().length && (console.log("chat happened !!!"),
    $(".icon-chat").css({
        display: "table"
    }))
}),
$(document).on("click", "#lc-ec-ok", function() {
    $(".icon-chat").css({
        display: "none"
    })
}),
document.addEventListener("keydown", function(e) {
    27 === (e.keyCode || e.which) && minimizeChat()
}),
$("#h-mask, #close-ham-menu ").click(function() {
    minimizeChat()
}),
$(".search-icon-wrapper").click(function() {
    $("#search-products").submit()
}),
$(".search-bar.morphsearch-input").on("keyup", function(e) {
    var t = /^[0-9a-zA-Z\s]+$/
      , i = $(this).val();
    return !!i.match(t) || (e.preventDefault(),
    $(this).val(i.replace(/[^a-z0-9\s]/gi, "")),
    !1)
}),
$("#search-products").on("submit", function() {
    var e = $(".search-bar.morphsearch-input").val();
    if ("" === e)
        return !1;
    saveSearchedKeywordsAndNavigation(e, null, null, null, null),
    savePdpReco(e, null, null, null, null),
    saveLastListingPath("search");
    let t = []
      , i = []
      , s = document.getElementById("categories-name-list")
      , o = document.getElementById("products-name-list");
    t = s && s.value && s.value.split(","),
    i = o && o.value && o.value.split(",");
    let n = {
        search_term: e,
        search_section: "",
        item_name: "",
        item_position: "",
        item_url: `${window.location.host}/search`,
        search_suggestion_selected: !1,
        search_count: ""
    };
    return n.categoriesList = t && t,
    n.productsNameList = i && i,
    localStorage.setItem("searchEvent", JSON.stringify(n)),
    $("#h-search").removeClass("open"),
    $(".searched-text-container").addClass("hide"),
    $(".prod-card-search-suggestions").html(""),
    window.location = "/search?q=" + e,
    !1
}),
$(document).on("change", "select[name=cid]", function() {
    mobISDCode($(this).find("option:selected").data("mprefix"), this)
}),
$(".subcat-header").on("click", function(e) {
    e.stopPropagation()
}),
$(document).on("click", ".subcategory-tile", function() {
    if ($(this).hasClass("active")) {
        $(this).removeClass("active"),
        $(this).find(".down-arrow").removeClass("open"),
        $(this).parent().find(".dropdown-content-arrow").removeClass("visible"),
        $(this).parent().find(".product-type-list").removeClass("visible");
        var e = this;
        return void setTimeout(function() {
            $(e).parent().parent().find(".blank-placeholder").remove()
        }, 200)
    }
    clearSubCategorySelection(),
    $(this).addClass("active"),
    $(this).find(".down-arrow").addClass("open");
    var t = $(this).parent().find(".product-type-list");
    $(this).parent().find(".dropdown-content-arrow").addClass("visible");
    var i = $(this).parent().index();
    i += 4 - i % 5;
    var s = $(this).parents(".subcategory-list").find(".subcategory").eq(i);
    s.after("<div class='blank-placeholder'></div>"),
    s.next().css("height", parseInt(t.outerHeight()) - 4 + "px"),
    t.addClass("visible");
    var o = parseInt($(this).css("marginTop"))
      , n = $(this).position().top;
    t.css("top", $(this).height() + o + n + 12 + "px")
});
var is_open = !1;
if ($(document).on("click", "#show-category, .cross-mega-menu", function() {
    is_open ? (clearSubCategorySelection(),
    $(".cat-list").addClass("hidden"),
    $(".selection-bar").children().show(),
    $(".cross-mega-menu").hide(),
    $("#show-category").removeClass("cat-head-clk").addClass("text-white"),
    $(".mega-menu").removeClass("open-menu"),
    $(".mega-menu .cat-background").removeClass("open-submenu"),
    $("body").css("overflow", "auto"),
    $(".category-pad").removeClass("active")) : ($(".selection-bar").children().hide(),
    $("#show-category").show(),
    $("#show-category").removeClass("text-white").addClass("cat-head-clk"),
    $(".cross-mega-menu").show(),
    $(".cat-list").removeClass("hidden"),
    $(".mega-menu").addClass("open-menu"),
    $(".mega-menu").one("webkitTransitionEnd otransitionend msTransitionEnd transitionend", function(e) {
        $(".mega-menu .cat-background").addClass("open-submenu")
    }),
    $("body").css("overflow", "hidden")),
    is_open = !is_open
}),
$(".login-hover").hover(function() {
    "Login" == $(".login-hover a").text().trim() ? $(".login-tooltip .ltp").text("Click here to login") : ($(".login-tooltip .ltp").text("My account"),
    $(".login-tooltip").css("right", "5%")),
    $(".login-tooltip").show()
}, function() {
    $(".login-tooltip").hide()
}),
$(".lgh2").hover(function() {
    "Login" == $(".lgh2 a div").text().trim() ? $(".login-tooltip2 .ltp").text("Click here to login") : ($(".login-tooltip2 .ltp").text("My account"),
    $(".login-tooltip2").css("width", "7%"),
    $(".arrow-up2").css("left", "44%")),
    $(".login-tooltip2").show()
}, function() {
    $(".login-tooltip2").hide()
}),
$(window).on("load", function() {
    window.windowLoaded = !0
}),
$(document).bind("ajaxStop", function() {
    window.windowLoaded ? lazyLoadImgs() : $(window).on("load", function() {
        window.setTimeout(function() {
            lazyLoadImgs()
        }, 100)
    })
}),
$(document).on("click", ".prod-title-hover", function() {
    var e = $(this).data("prod-id");
    window.open(e, "_blank")
}),
$("#search-products").on("input", debounce(function(e) {
    e.target;
    $("#dialpad-content").hasClass("active") && $("#dialpad-content").removeClass("active"),
    $(".currency-container").hasClass("active") && $(".currency-container").removeClass("active");
    var t = $(e.target).val()
      , i = `&type2=${$("body").data("type-two") ? $("body").data("type-two") : ""}`;
    t.length >= 3 ? (activeXHR && (activeXHR = !1),
    activeXHR = !0,
    xhrObj = $.ajax({
        url: `/api/search?searchKey=${t}${corpLabel ? i : ""}`,
        method: "get",
        async: !0,
        cache: !0,
        beforeSend: function(e) {
            $("#h-search").addClass("open"),
            xhrObj && xhrObj.abort()
        },
        success: function(i, s, o) {
            var n = $(e.target).val();
            if (t.length >= 3 && n.length >= 3 && i && i.trim()) {
                $(".searched-text-container").removeClass("hide"),
                $("body").addClass("no-scroll"),
                $(".prod-card-search-suggestions").html(i);
                var a = {
                    event: "search_suggestion_impression",
                    flag_suggestion: "",
                    search_section: "Suggestions"
                };
                window.dataLayer.push(a)
            } else
                $(".recommended-collections-section").length || $(".searched-text-container").addClass("hide"),
                getTrendingProducts(),
                $("body").removeClass("no-scroll"),
                $(".products-list-suggestions").removeClass("render-products"),
                $(".prod-card-search-suggestions .cards-list-suggestions").html(""),
                $(".prod-card-search-suggestions ul.products-list-suggestions").html("")
        },
        complete: function(e, t) {}
    })) : ($(".recommended-collections-section").length || $(".searched-text-container").addClass("hide"),
    getTrendingProducts(),
    $("body").removeClass("no-scroll"),
    $(".products-list-suggestions").removeClass("render-products"),
    $(".prod-card-search-suggestions .cards-list-suggestions").html(""),
    $(".prod-card-search-suggestions ul.products-list-suggestions").html(""))
}, 300)),
$(".morphsearch-input").on("focus", function() {
    $(".search-placeholder-wrapper").addClass("hide"),
    getTrendingProducts()
}),
$(".morphsearch-input").on("blur", function() {
    "" == $(this).val() && $(".search-placeholder-wrapper").removeClass("hide")
}),
$(window).on("load", function() {
    "" != $(".morphsearch-input").val() && $(".search-placeholder-wrapper").addClass("hide")
}),
$(document).click(function(e) {
    !$(e.target).closest("#morphsearch").length && $("#morphsearch").is(":visible") && suggestionsVisibility(!1)
}),
$(".morphsearch-input").on("blur", function(e) {
    let t = (e.target,
    $(e.target).val());
    saveSearchedKeywordsAndNavigation(t, null, null, null, null),
    savePdpReco(t, null, null, null, null),
    saveLastListingPath("search")
}),
$(document).on("click", ".product-grid-item", function() {
    if ($(this) && $(this).data("pid")) {
        let e = $(this).data("pid");
        saveSearchedKeywordsAndNavigation(null, e, null, null, null),
        savePdpReco(null, e, null, null, null)
    }
}),
$(document).on("click", ".searched-text-container", function(e) {
    $(".searched-text-container").addClass("hide"),
    $("body").removeClass("no-scroll"),
    $(".prod-card-search-suggestions .cards-list-suggestions").html(""),
    $(".prod-card-search-suggestions .products-list-suggestions").html(""),
    $(".morphsearch-form.igp-header-form input").val(""),
    e.stopPropagation()
}),
$("#pdp-lead-gen").length) {
    let e = JSON.parse(sessionStorage.getItem("show-corporate-modal"));
    e || setTimeout(function() {
        $(".lead-gen-container").show(),
        sessionStorage.setItem("show-corporate-modal", 1)
    }, 5e3)
}
$(window).on("load", function() {
    $(".nav-row .nav-cont").length && secondaryNavImpression()
}),
$(document).on("keydown", "input[name='email']", function(e) {
    if (32 === e.which)
        return !1
}),
$(document).on("change", "input[name='email']", function() {
    this.value = this.value.replace(/\s/g, "")
});
var startX, scrollLeft, selectionTxtPnlSlider = document.querySelectorAll(".sel-pnl-text-re"), isDown = !1;
selectionTxtPnlSlider.length && selectionTxtPnlSlider.forEach(function(e) {
    e.addEventListener("mousedown", t=>{
        isDown = !0,
        startX = t.pageX - e.offsetLeft,
        scrollLeft = e.scrollLeft
    }
    ),
    e.addEventListener("mouseleave", ()=>{
        isDown = !1
    }
    ),
    e.addEventListener("mouseup", ()=>{
        isDown = !1
    }
    ),
    e.addEventListener("mousemove", t=>{
        if (isDown) {
            t.preventDefault();
            var i = t.pageX - e.offsetLeft
              , s = 2 * (i - startX);
            e.scrollLeft = scrollLeft - s
        }
    }
    )
}),
$(window).on("scroll", getLiveOrderTrackingWidget);
;"use strict";
function isElementInViewport(e) {
    "function" == typeof jQuery && e instanceof jQuery && (e = e[0]);
    var t = e.getBoundingClientRect();
    return t.top <= 0 && t.bottom >= 0 || t.bottom >= (window.innerHeight || document.documentElement.clientHeight) && t.top <= (window.innerHeight || document.documentElement.clientHeight) || t.top >= 0 && t.bottom <= (window.innerHeight || document.documentElement.clientHeight)
}
function setLocalStorageValue(e, t) {
    localStorage.setItem(e, t)
}
function getLocalStorageValue(e) {
    return localStorage.getItem(e)
}
function responseCodeToText(e) {
    return {
        101: {
            message: "OTP sent successfully"
        },
        102: {
            message: "Email to CustomerId mismatch"
        },
        103: {
            message: "Email not registered with us. Please sign up"
        },
        104: {
            message: "Occurs when provided userDetails does not exist or providing both email and mobile together"
        },
        105: {
            message: "OTP verified!, Allow user to change password"
        },
        106: {
            message: "Please enter correct OTP"
        },
        107: {
            message: "OTP not provided"
        },
        108: {
            message: "Password reset successful"
        },
        109: {
            message: "Error while updating password / OTP expired"
        },
        110: {
            message: "Error while changing password, check the input data"
        },
        111: {
            message: "Please provide valid credentials"
        },
        112: {
            message: "Please enter valid email-id and password"
        },
        113: {
            message: "Email is not registered with us. Please sign up"
        },
        114: {
            message: "Soft-Login Successful"
        },
        115: {
            message: "NO USER DETAILS FOUND WITH THIS UNIQSRC, SOFT LOGIN DENIED"
        },
        116: {
            message: "Sending welcome mail on successful"
        },
        117: {
            message: "HashId and EmailId mismatch"
        },
        118: {
            message: "Please provide all the required parameters for signup"
        },
        119: {
            message: ""
        },
        120: {
            message: "Email already registered with us, please login"
        },
        121: {
            message: "You have exceeded the maximum number of attempts, please try again in few hours"
        },
        801: {
            message: "Please complete your address to continue."
        },
        810: {
            message: "Addons can't be ordered without a main product, please add a product to continue"
        },
        122: {
            message: "Yay! You are already registered with us"
        },
        123: {
            message: "Enter OTP sent to registered email id and phone no"
        },
        124: {
            message: "Enter OTP sent to registered email id"
        },
        125: {
            message: "Enter OTP sent to email id and phone no(Guest User)"
        }
    }[e].message
}
function toggleCatMegamenu() {
    if (mmOpen)
        fourthColumnHider(),
        thirdColumnHider(),
        redirectionContHider(),
        subCatHider(),
        $(".mm-content").css("width", ""),
        $(".mm-wrapper").css("width", ""),
        $(".mm-bg").removeClass("show"),
        $(".gc-mm-wrapper").removeClass("active"),
        $(".mm-wrapper").removeClass("active"),
        $("html,body").removeClass("no-scroll"),
        setTimeout(function() {
            $(".gc-mm-wrapper").removeClass("mm"),
            $(".mm-wrapper").removeClass("mm")
        }, 800),
        mmOpen = !1,
        $("#fc_frame").length && ($("#fc_frame").show(),
        $("#fc_frame").hasClass("fc-open") && $(".chat-fc-form-outer").css("visibility", "visible"));
    else {
        $(".searched-text-container").hasClass("hide") || $(".searched-text-container").trigger("click"),
        $(".gc-mm-wrapper").addClass("active mm"),
        $(".mm-wrapper").addClass("active mm"),
        $("body").addClass("no-scroll"),
        $(".mm-bg").addClass("show"),
        mmOpen = !0,
        $("#fc_frame").length && ($("#fc_frame").hide(),
        $(".chat-fc-form-outer").css("visibility", "hidden"));
        var e = 85 * window.innerHeight / 100 - 72;
        $(".layer_0_cont").innerHeight() < e && $(".layer_0_cont").find(".scroll_down_cont").addClass("hide")
    }
}
function getCookie(e) {
    for (var t = e + "=", i = document.cookie.split(";"), s = 0; s < i.length; s++) {
        for (var o = i[s]; " " == o.charAt(0); )
            o = o.substring(1);
        if (0 == o.indexOf(t))
            return o.substring(t.length, o.length)
    }
    return ""
}
function setCookie(e, t, i, s) {
    var o = new Date;
    o.setTime(i),
    document.cookie = encodeURIComponent(e) + "=" + encodeURIComponent(t) + (s ? ";path=/" : ";path=" + window.location.pathname) + (i ? ";expires=" + o.toUTCString() : "")
}
function init() {
    $(window).resize(function() {
        $(".cart-list").height($("#cart").height() - ($(".s-cart-header").height() + $(".cart-b-content").height()))
    })
}
function callOAuth(e) {
    history.pushState(null, null, "#");
    var t = window.location;
    popupCenter(e + "?redirectTo=" + t.pathname + t.search, "igp", 600, 500)
}
function getImageUrl(e) {
    return "url:xyzi" === e ? e = "images/gift.jpg" : "ico" === e && (e = "fa-heart-o"),
    e
}
function getDesktopCardImagePath() {
    return "production" === env ? "d/" : "development" === env ? "d/" : void 0
}
function getProductImageListingPath(e) {
    var t = "t_prod" + e + ",f_auto,q_auto/products/";
    return "production" === env ? t : "development" === env ? t : void 0
}
function dynamicSort(e) {
    var t = 1;
    return "-" === e[0] && (t = -1,
    e = e.substr(1)),
    function(i, s) {
        return (i[e] < s[e] ? -1 : i[e] > s[e] ? 1 : 0) * t
    }
}
function popupCenter(e, t, i, s) {
    var o = screen.width / 2 - i / 2
      , n = screen.height / 2 - s / 2;
    return window.open(e, t, "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=" + i + ", height=" + s + ", top=" + n + ", left=" + o)
}
function htmlDecode(e) {
    var t = document.createElement("div");
    return t.innerHTML = e,
    0 === t.childNodes.length ? "" : t.childNodes[0].nodeValue
}
function getPriceInfo(e, t, i) {
    var s, o = "", n = "mrp_inr";
    return "INR" == i ? (s = "normal" == t ? "mrp_" : "dprice_",
    n = s + i.toLowerCase(),
    o += currencyConfig[i] + " " + e[n]) : (s = "normal" == t ? "mrp_" : "dprice_",
    n = s + "usd".toLowerCase(),
    o += currencyConfig[i] + " " + e[n]),
    o
}
function getPriceInfo_revamp(e, t, i) {
    var s, o = "", n = "mrp_inr";
    return "INR" == i ? (s = "normal" == t ? "mrp_" : "dprice_",
    n = s + i.toLowerCase(),
    o += "&#8377; " + e[n]) : (s = "normal" == t ? "mrp_" : "dprice_",
    n = s + "usd".toLowerCase(),
    o += currencyConfig[i] + " " + e[n]),
    o
}
function getCartPrice(e, t) {
    var i = "";
    return i += "INR" == t ? "&#8377; " + e : currencyConfig[t] + " " + e
}
function getCartPagePrice(e, t, i, s, o) {
    var n = ""
      , a = "mrp";
    switch (t) {
    case "mrp":
        a = "p.mrp";
        break;
    case "p-mrp":
        a = "mrp";
        break;
    case "stotal":
        a = "stotal";
        break;
    case "ppl":
        a = "ppheral";
        break;
    case "total":
        a = "total";
        break;
    case "price":
        a = "price";
        break;
    case "gbox":
        a = "gbox";
        break;
    case "dscval":
        a = "dscval";
        break;
    case "shipcharge":
        a = "shipcharge";
        break;
    case "amount":
        a = "amount";
        break;
    case "scharge":
        a = "scharge";
        break;
    case "productquoteprice":
        a = "productquoteprice"
    }
    return n += "INR" == i ? "val" == s ? e[a] : 1 == o ? "&#8377; " + e[a] : currencyConfig[i] + " " + e[a] : "val" == s ? e[a + "usd".toLowerCase()] : currencyConfig[i] + " " + e[a + "usd".toLowerCase()]
}
function getCartAttr(e, t, i, s) {
    if ("{}" == JSON.stringify(e))
        var o = "";
    else {
        var o = "";
        for (var n in e) {
            var a = n;
            if ("Peripheral" == a) {
                var r = e[n].split("|")
                  , l = r[1];
                o += 0 == t ? '<p class="attr-tag no-margin">' + n + " : " + l + " (FREE)<p>" : '<p class="attr-tag no-margin">' + n + " : " + l + " (" + findCurrency(t, i, "ppl", s) + ")<p>"
            } else if ("Color" == a)
                o += "";
            else {
                var d = e[n].split("|")
                  , c = d[0];
                o += '<span class="attr-tag">' + n + " : " + c + "</span><br/><br/>"
            }
        }
    }
    return o
}
function findCurrency(e, t, i, s) {
    var o = "";
    switch (i) {
    case "mrp":
        "p.mrp";
        break;
    case "stotal":
        "stotal";
        break;
    case "ppl":
        "ppheral";
        break;
    case "total":
        "total"
    }
    return o += "INR" == s ? currencyConfig[s] + " " + e : currencyConfig[s] + " " + t
}
function closeFunc(e) {
    giftpartnerVideo && giftpartnerVideo.pause();
    const t = document.getElementById("video");
    t.pause(),
    setTimeout(function() {
        e.style.display = "none",
        e.style.top = "17%",
        giftpartnerVideoImg.style.opacity = "1",
        t.style.width = "0px",
        t.classList.remove("videoOpen"),
        t.classList.add("videoClose"),
        giftpartnerVideo.style.width = "310px",
        giftpartnerVideo.classList.remove("giftpartnerVideoOpen"),
        giftpartnerVideo.classList.add("giftpartnerVideoClose")
    })
}
function contactFormSubmit(e) {
    event.preventDefault();
    var t, i = document.getElementById("contactUsForm"), s = document.getElementById("contactUsForm2");
    if ("form1" == e) {
        if (!validateEmail(i[1].value))
            return alert("Invalid Email"),
            !1;
        if (i[2].value.length < 4)
            return alert("Please enter minimum 4 digit"),
            !1;
        t = {
            name: i[0].value,
            email: i[1].value,
            mob: i[2].value,
            url: location.pathname,
            company: i[3].value
        },
        i[4].value && (t.desc = i[4].value),
        i[5] && "hidden" == i[5].type && (t.micrositeId = i[5].value)
    } else {
        if (!validateEmail(s[1].value))
            return alert("Invalid Email"),
            !1;
        if (s[2].value.length < 4)
            return alert("Please enter minimum 4 digit"),
            !1;
        t = {
            name: s[0].value,
            email: s[1].value,
            mob: s[2].value,
            url: location.pathname,
            company: s[3].value
        },
        s[4] && "hidden" == s[4].type && (t.micrositeId = s[4].value)
    }
    const o = e=>"" != e;
    t && Object.values(t).every(o) ? $.ajax({
        url: "/api/support",
        method: "POST",
        dataType: "json",
        data: JSON.stringify(t),
        contentType: "application/json; charset=UTF-8",
        async: !0,
        cache: !0,
        beforeSend: function(e) {
            $('<img src="' + cdn.assetsURL + 'images/loading.gif" style="width: 20px;" class="cat-loader" align="center">').insertAfter(".contact-title-border")
        },
        success: function(i, s, o) {
            if ("Success" == i.status) {
                if ($(".cat-loader").remove(),
                $(".contact-details-height").removeClass("opacity-0-5"),
                "form1" == e) {
                    var n = '<div class="success-msg" style="color: #636363;font-size: 1.5em;">Thanks for contacting us.<br/> Your message has been received. Our Enterprise Solution specialist will reach out to you soon.</div>';
                    $("#contactUsForm").html(n)
                } else {
                    if ("/business" == location.pathname)
                        var n = '<div class="success-msg d-flex justify-content-center align-items-center" style="font-size: 1.2em;padding:13px 11px;">Thanks for contacting us. Your message has been received. Our Enterprise Solution specialist will reach out to you soon.</div>';
                    else
                        var n = '<div class="success-msg d-flex justify-content-center align-items-center" style="font-size: 1.2em;padding:13px 11px;">Thanks for contacting us. Your message has been received. Our customer care team will reach out to you soon.</div>';
                    $("#contactUsForm2").html(n)
                }
                $("#send-btn").prop("disabled", !1),
                window.dataLayer = window.dataLayer || [];
                var a = {
                    event: "userformsubmit",
                    formtype: "lead generation",
                    uemail1: t.email,
                    ucontact: t.mob,
                    uname: t.name,
                    mode: "form1" == e ? "Get in touch" : "Lead generation"
                };
                "form1" == e ? a.umessage = t.desc : a.ucompany = t.company,
                window.dataLayer.push(a)
            } else
                $(".error-msg-text").removeClass("hide"),
                $(".cat-loader").remove(),
                $(".contact-details-height").removeClass("opacity-0-5"),
                $("#send-btn").prop("disabled", !1)
        },
        complete: function(e, t) {}
    }) : alert("Required fields should not empty.")
}
function instagramFeed() {}
function validateEmail(e) {
    return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)
}
function enquireNow() {
    let e = document.getElementById("contactUsForm2");
    Array.from($("#contactUsForm2 input[type=text],input[type=number]")).forEach((e,t)=>e.classList.add("contact-us-form-border")),
    e && e[0].focus()
}
function downloadShortListed() {
    $.ajax({
        url: "/getShortListedItems",
        method: "GET",
        contentType: "application/json; charset=UTF-8",
        async: !0,
        cache: !0,
        beforeSend: function(e) {
            console.log("before send")
        },
        success: function(e, t, i) {
            if (e && e.uploadedFilePath && e.uploadedFilePath.shortListedPdf && e.uploadedFilePath.shortListedPdf.length > 0)
                for (let t = 0; t < e.uploadedFilePath.shortListedPdf.length; t++) {
                    var s = document.createElement("a");
                    s.href = e.uploadedFilePath.shortListedPdf[t],
                    s.download = e.uploadedFilePath.shortListedPdf[t],
                    s.dispatchEvent(new MouseEvent("click"))
                }
        },
        error: function(e) {
            console.log("error")
        }
    })
}
function storeSearchedKeys(e) {
    if (e && "" !== e) {
        var t = JSON.parse(getLocalStorageValue("searchedList"));
        t || (t = []),
        t.indexOf(e) == -1 && (3 == t.length && t.shift(),
        t.push(e),
        setLocalStorageValue("searchedList", JSON.stringify(t)))
    }
}
function onclickDataLayer(e, t) {
    t = t || {},
    t.event = e,
    window.dataLayer && (window.dataLayer = window.dataLayer || [],
    window.dataLayer.push(t))
}
function getCollections() {
    $("#shortlist-header").remove(),
    $(".shortlist-heading-rebrand").remove(),
    $.ajax({
        url: "/c/collection/getList",
        method: "POST",
        data: {},
        contentType: "application/json; charset=UTF-8",
        success: function(e) {
            if ("Success" == e.status) {
                let t = e.data;
                for (let e = 0; e < t.length; e++)
                    $("#shortlist-products-container").append(`<a href="${t[e].url}" class="shortlist-product" onclick="onclickDataLayer('empty_collection_click',{'item_name': '${t[e].title}','item_position': '${e + 1}', 'item_url': '${window.location.origin}${t[e].url}'})">

                        <div class="shortlist-img">

                            <img class="img-responsive lazy-load-image" alt="${t[e].altTag}" src="${window.cdn.bannersURL}${t[e].imageUrl}" data-original="${window.cdn.bannersURL}${t[e].imageUrl}" >

                        </div>
                
                        <span class="shortlist-text Paragraph-14-S--Semibold">${t[e].title}</span>

                    </a>`)
            }
        }
    })
}
var test0001, today = new Date, searchhistoryurl = getLocalStorageValue("searchhistoryurl"), tempForBuild = "tempForBuild0120";
searchhistoryurl || setLocalStorageValue("searchhistoryurl", JSON.stringify([]));
var toggleSearch, showBlock, hideBlock, oldURL, toggleCatMegamenuFlag, xhrObj, ignoreHash = ["#search", "#login-user", "#cat-mm", "#chklogin", "#chkdelivery", "#chksummary", "#chkpayment"], chkoutUrls = ["#chklogin", "#chkdelivery", "#chksummary", "#chkpayment"], mmOpen = !1, testtemp = 0, video = document.getElementById("video"), giftpartnerVideoImg = document.getElementById("giftpartnerVideoImg"), giftpartnerVideo = document.getElementById("giftpartnerVideo"), closeVideo = document.getElementsByClassName("close-video");
$(window).on("load", function() {
    function e() {
        $("video").fadeOut("slow"),
        closeVideo[0].style.display = "none"
    }
    function t() {
        giftpartnerVideoImg.style.opacity = "0",
        giftpartnerVideo.classList.remove("giftpartnerVideoClose"),
        giftpartnerVideo.classList.add("giftpartnerVideoOpen"),
        giftpartnerVideo.style.width = "310px",
        closeVideo[0].style.display = "block",
        closeVideo[0].style.top = "27%",
        setTimeout(function() {
            giftpartnerVideo.play()
        }, 100)
    }
    function i() {}
    if ("#cat-mm" == window.location.hash && toggleCatMegamenu(),
    window.onhashchange = function(e) {
        var t = JSON.parse(getLocalStorageValue("searchhistoryurl"));
        t.push(location.hash),
        t.length > 2 && t.splice(0, t.length - 2),
        setLocalStorageValue("searchhistoryurl", JSON.stringify(t)),
        oldURL = "#" + e.oldURL.split("#")[1],
        "#search" !== oldURL && "#search" !== window.location.hash || toggleSearch(),
        "#login-user" !== oldURL && "#login-user" !== window.location.hash || ("#login-user" === window.location.hash ? showBlock() : hideBlock()),
        "#cat-mm" !== oldURL && "#cat-mm" !== window.location.hash || toggleCatMegamenu(),
        "#editProfile" == window.location.hash ? ($(".edit-profile-cta-container").addClass("hide"),
        $(".profile-save-changes-cta").removeClass("hide"),
        $(".edit-profile-form").removeClass("hide"),
        $(".static-profile-data-main").addClass("hide"),
        $(".profile-top-data").addClass("hide"),
        $(".profile-mobileline-divider-container").addClass("hide"),
        $(".profile-save-changes-cta-container").removeClass("hide"),
        isPhone || $(".static-data-edit-cta").addClass("hide")) : "#editProfile" == oldURL && ($(".edit-profile-cta-container").removeClass("hide"),
        $(".edit-profile-form").addClass("hide"),
        $(".static-profile-data-main").removeClass("hide"),
        $(".profile-top-data").removeClass("hide"),
        $(".profile-mobileline-divider-container").removeClass("hide"),
        isPhone || $(".static-data-edit-cta").removeClass("hide"),
        $(".profile-save-changes-cta-container").addClass("hide"),
        $(".revamp-editProfile-overlay.editProfile-overlay").addClass("hide")),
        "#editPassword" == window.location.hash ? (isPhone ? $(".mobile-profile-static-container").addClass("hide") : $(".chng-passwrd-desktop").addClass("hide"),
        $(".footer-cta-container").addClass("hide"),
        $(".change-password-big-container").removeClass("hide"),
        isPhone ? $(".change-password").show("1000") : $(".change-password").show("500"),
        $("#oldpassword,#newpassword,#confirmpassword").val("").removeClass("error"),
        $(".change-password-input-field").find(".error-msg").addClass("hide"),
        $(".chngPasswordValidation").html("")) : "#editPassword" == oldURL && (isPhone ? $(".mobile-profile-static-container").removeClass("hide") : $(".chng-passwrd-desktop").removeClass("hide"),
        $(".footer-cta-container").removeClass("hide"),
        $(".change-password").hide("500")),
        chkoutUrls.indexOf(oldURL) === -1 && chkoutUrls.indexOf(window.location.hash) === -1 || !$(".checkout-container").length || $(".checkout-container").data("addmoneywallet") || toggleCheckoutSteps()
    }
    ,
    $(".slist-remove").length || "/shortlist" != window.location.pathname || getCollections(),
    "#search" === window.location.hash && toggleSearch(),
    "#login-user" === window.location.hash && ($("#user-data").data("userid") ? showBlock() : history.pushState("", document.title, window.location.pathname + window.location.search)),
    "#cat-mm" === window.location.hash && (toggleCatMegamenuFlag = !0),
    "#editProfile" == window.location.hash && ($(".edit-profile-cta-container").addClass("hide"),
    $(".profile-save-changes-cta").removeClass("hide"),
    $(".edit-profile-form").removeClass("hide"),
    $(".static-profile-data-main").addClass("hide"),
    $(".profile-top-data").addClass("hide"),
    $(".profile-mobileline-divider-container").addClass("hide"),
    $(".profile-save-changes-cta-container").removeClass("hide"),
    isPhone || $(".static-data-edit-cta").addClass("hide")),
    "#editPassword" == window.location.hash && (isPhone ? $(".mobile-profile-static-container").addClass("hide") : $(".chng-passwrd-desktop").addClass("hide"),
    $(".footer-cta-container").addClass("hide"),
    $(".change-password-big-container").removeClass("hide"),
    isPhone ? $(".change-password").show("1000") : $(".change-password").show("500")),
    chkoutUrls.indexOf(window.location.hash) !== -1 && $(".checkout-container").length && !$(".checkout-container").data("addmoneywallet") && toggleCheckoutSteps(),
    $(".disc-close").click(function() {
        $(".f-t-alert").addClass("move-down"),
        setTimeout(function() {
            $(".f-t-alert").remove()
        }, 5e3)
    }),
    video) {
        video.style.width = "0px";
        sessionStorage.getItem("videoPlayed");
        video.addEventListener("ended", e, !1)
    }
    giftpartnerVideoImg && (giftpartnerVideoImg.addEventListener("click", t, !1),
    giftpartnerVideo.addEventListener("pause", i, !1)),
    $("#homelink").click(function(e) {
        e.preventDefault(),
        $("body, html").animate({
            scrollTop: $("#homeSection").offset().top - 80
        }, 500)
    }),
    $("#leaderlink").click(function(e) {
        e.preventDefault(),
        $("body, html").animate({
            scrollTop: $("#LeaderSection").offset().top - 80
        }, 500)
    }),
    $("#productlink").click(function() {
        $("body, html").animate({
            scrollTop: $("#productSection").offset().top - 80
        }, 500)
    }),
    $("#digitallink").click(function() {
        $("body, html").animate({
            scrollTop: $("#digitalSection").offset().top - 80
        }, 500)
    }),
    $("#opslink").click(function() {
        $("body, html").animate({
            scrollTop: $("#opsSection").offset().top - 80
        }, 500)
    }),
    $("#storelink").click(function() {
        $("body, html").animate({
            scrollTop: $("#storeSection").offset().top - 80
        }, 500)
    }),
    $("#contactlink").click(function() {
        $("body, html").animate({
            scrollTop: $("#contactSection").offset().top - 80
        }, 500)
    }),
    $(".refine-list-item").each(function() {
        var e, t, i;
        $(this).find(".s-button").length ? (e = "rro" === $(this).find(".s-button").data("item_subtype") ? $(this).find(".s-button").data("selected-type") : $(this).find(".s-button").text(),
        t = $(this).find(".view-page--link").attr("href"),
        i = $(this).find(".s-button").data("item_subtype")) : (e = $(this).find(".cat-button").text(),
        t = $(this).find("a").attr("href"));
        let s = {
            event: "navigation_impression",
            item_name: e,
            item_position: $(this).index() + 1,
            item_url: t ? window.location.origin + t : "",
            navigation_subtype: i ? i : "cat",
            navigation_type: "primary"
        };
        pushDataLayer(s)
    })
}),
$(document).ready(function() {
    if ("/business" == window.location.pathname) {
        var e = window.location.href.split("#")[1];
        if (e)
            switch (e) {
            case "homelink":
                $("body, html").animate({
                    scrollTop: $("#homeSection").offset().top - 80
                }, 500);
                break;
            case "leaderlink":
                $("body, html").animate({
                    scrollTop: $("#LeaderSection").offset().top - 80
                }, 500);
                break;
            case "productlink":
                $("body, html").animate({
                    scrollTop: $("#productSection").offset().top - 80
                }, 500);
                break;
            case "digitallink":
                $("body, html").animate({
                    scrollTop: $("#digitalSection").offset().top - 80
                }, 500);
                break;
            case "opslink":
                $("body, html").animate({
                    scrollTop: $("#opsSection").offset().top - 80
                }, 500)
            }
    }
    $('meta[name="description"]').attr("content", htmlDecode($('meta[name="description"]').attr("content"))),
    $(document).on("focus", "input[name=pcode]", function() {
        var e = $(this).parents("form")
          , t = $(e).find("select[name=cid]").val() || $(e).find("input[name=cid]").val();
        "221" != t && $(e).find("input[name=pcode]").addClass("pincode"),
        isRevamp ? ($(e).find("input[name=pcode]").removeClass("number"),
        $(e).find("input[name=pcode]").attr("minlength", "4"),
        $(e).find("input[name=pcode]").attr("maxlength", "10")) : "99" === t ? ($(e).find("input[name=pcode]").addClass("number"),
        $(e).find("input[name=pcode]").attr("minlength", "6"),
        $(e).find("input[name=pcode]").attr("maxlength", "6")) : ($(e).find("input[name=pcode]").removeClass("number"),
        $(e).find("input[name=pcode]").attr("minlength", "4"),
        $(e).find("input[name=pcode]").attr("maxlength", "10"))
    }),
    $(window).on("load", function() {}),
    NProgress.configure({
        showSpinner: !1
    }),
    init(),
    "1" == getCookie("m-cart") && ($("#m-mask").addClass("is-active"),
    $("#m-cart-container").addClass("active")),
    $(".morphsearch-input").customautocomplete({
        source: "/api/searchSuggest",
        minLength: 1
    }),
    $("#cat-gift-shop").click(function() {
        $("html, body").animate({
            scrollTop: $(".section-content.category-c").offset().top - 125
        }, 300)
    })
}),
$(document).on("click", ".gc-mm-header", function() {
    $(".gc-mm-wrapper").hasClass("active") ? document.referrer.indexOf("/amp/") != -1 || "" == document.referrer ? ($(".gc-mm-wrapper").removeClass("active"),
    $("html,body").removeClass("no-scroll"),
    setTimeout(function() {
        $(".gc-mm-wrapper").removeClass("mm")
    }, 800),
    mmOpen = !1,
    window.history.pushState({}, "", window.location.pathname)) : window.history.go(-1) : window.location.hash = "#cat-mm"
}),
$(document).on("click", ".mm-header", function() {
    $(".mm-wrapper").hasClass("active") ? (fourthColumnHider(),
    thirdColumnHider(),
    redirectionContHider(),
    subCatHider(),
    $(".mm-content").css("width", ""),
    $(".mm-wrapper").css("width", ""),
    $(".mm-bg").removeClass("show"),
    $(".mm-wrapper").removeClass("active"),
    $("html,body").removeClass("no-scroll"),
    setTimeout(function() {
        $(".mm-wrapper").removeClass("mm")
    }, 800),
    mmOpen = !1,
    window.history.pushState({}, "", window.location.pathname),
    $("#fc_frame").length && ($("#fc_frame").show(),
    $("#fc_frame").hasClass("fc-open") && $(".chat-fc-form-outer").css("visibility", "visible"))) : window.location.hash = "#cat-mm"
}),
$(document).on("mouseover", ".cat-list-item", function() {
    $(".cat-list-item").removeClass("active")
}),
$(document).on("mouseout", ".gc-mm-content", function() {
    $(".cat-list-item.current-element").addClass("active")
}),
document.addEventListener("keydown", function(e) {
    27 === (e.keyCode || e.which) && mmOpen && window.history.go(-1)
}),
$(document).on("click", ".mm-bg", function() {
    $(".mm-bg").removeClass("show"),
    $(".gc-mm-wrapper").removeClass("active"),
    $(".mm-wrapper").removeClass("active"),
    $("html,body").removeClass("no-scroll"),
    setTimeout(function() {
        $(".gc-mm-wrapper").removeClass("mm"),
        $(".mm-wrapper").removeClass("mm")
    }, 800),
    mmOpen = !1,
    $("#fc_frame").length && ($("#fc_frame").show(),
    $("#fc_frame").hasClass("fc-open") && $(".chat-fc-form-outer").css("visibility", "visible")),
    window.history.pushState({}, "", window.location.pathname)
}),
$("#merge-cart").click(function() {
    var e = $(this).data("mcart")
      , t = {
        mcart: e
    };
    $.ajax({
        url: "/c/mrgCrt",
        method: "POST",
        data: JSON.stringify(t),
        contentType: "application/json; charset=UTF-8",
        async: !0
    }).done(function(e) {
        e.error || (document.cookie = "m-cart=0",
        "/checkout" === window.location.pathname ? (history.pushState(null, null, "#chkdelivery"),
        location.reload()) : location.reload(!0))
    })
}),
$("#merge-cancel").click(function() {
    var e = $(this).data("mcart")
      , t = {
        mcart: e
    };
    $.ajax({
        url: "/c/mrgCrt",
        method: "POST",
        data: JSON.stringify(t),
        contentType: "application/json; charset=UTF-8",
        async: !0
    }).done(function(e) {
        e.error || (document.cookie = "m-cart=0",
        "/checkout" === window.location.pathname ? (history.pushState(null, null, "#chkdelivery"),
        location.reload()) : location.reload(!0))
    })
}),
function(e) {
    var t = !1;
    window.chatme_assets = !1,
    e(".dial-pad").click(function(i) {
        if (i.stopPropagation(),
        !window.chatme_assets) {
            window.chatme_assets = !0;
            var s = document.createElement("link");
            s.setAttribute("rel", "stylesheet");
            var o = window.location && "https:" == window.location.protocol
              , n = document.getElementsByTagName("html")[0].getAttribute("lang")
              , a = ["ar", "he"]
              , r = a.indexOf(n) >= 0 ? "-rtl" : "";
            s.setAttribute("type", "text/css"),
            s.setAttribute("href", (o ? "https://d36mpcpuzc4ztk.cloudfront.net" : "http://assets1.chat.freshdesk.com") + "/css/visitor" + r + ".css"),
            document.getElementsByTagName("head")[0].appendChild(s);
            var l = document.createElement("script");
            l.type = "text/javascript",
            l.defer = !0,
            l.src = (o ? "https://d36mpcpuzc4ztk.cloudfront.net" : "http://assets.chat.freshdesk.com") + "/js/visitor.js",
            (document.body ? document.body : document.getElementsByTagName("head")[0]).appendChild(l),
            window.livechat_setting = "eyJ3aWRnZXRfc2l0ZV91cmwiOiJpZ3BoZWxwLmZyZXNoZGVzay5jb20iLCJwcm9kdWN0X2lkIjpudWxsLCJuYW1lIjoiaWdwIiwid2lkZ2V0X2V4dGVybmFsX2lkIjpudWxsLCJ3aWRnZXRfaWQiOiI1ZTJjYTMyOC1hYzNiLTRjZTAtYTE3ZS1kNjdiNDE2ODQ2MGYiLCJzaG93X29uX3BvcnRhbCI6dHJ1ZSwicG9ydGFsX2xvZ2luX3JlcXVpcmVkIjpmYWxzZSwibGFuZ3VhZ2UiOm51bGwsInRpbWV6b25lIjpudWxsLCJpZCI6ODAwMDAwNzgwNCwibWFpbl93aWRnZXQiOjEsImZjX2lkIjoiM2YyNzlmYzc1YzZiMzhhY2IyZWM3MDlmMTlmNWI1OTAiLCJzaG93IjoxLCJyZXF1aXJlZCI6MiwiaGVscGRlc2tuYW1lIjoiaWdwIiwibmFtZV9sYWJlbCI6Ik5hbWUiLCJtZXNzYWdlX2xhYmVsIjoiTWVzc2FnZSIsInBob25lX2xhYmVsIjoiUGhvbmUiLCJ0ZXh0ZmllbGRfbGFiZWwiOiJUZXh0ZmllbGQiLCJkcm9wZG93bl9sYWJlbCI6IkRyb3Bkb3duIiwid2VidXJsIjoiaWdwaGVscC5mcmVzaGRlc2suY29tIiwibm9kZXVybCI6ImNoYXQuZnJlc2hkZXNrLmNvbSIsImRlYnVnIjoxLCJtZSI6Ik1lIiwiZXhwaXJ5IjowLCJlbnZpcm9ubWVudCI6InByb2R1Y3Rpb24iLCJlbmRfY2hhdF90aGFua19tc2ciOiJUaGFuayB5b3UhISEiLCJlbmRfY2hhdF9lbmRfdGl0bGUiOiJFbmQiLCJlbmRfY2hhdF9jYW5jZWxfdGl0bGUiOiJDYW5jZWwiLCJzaXRlX2lkIjoiM2YyNzlmYzc1YzZiMzhhY2IyZWM3MDlmMTlmNWI1OTAiLCJhY3RpdmUiOjEsInJvdXRpbmciOm51bGwsInByZWNoYXRfZm9ybSI6MSwiYnVzaW5lc3NfY2FsZW5kYXIiOm51bGwsInByb2FjdGl2ZV9jaGF0IjowLCJwcm9hY3RpdmVfdGltZSI6MTUsInNpdGVfdXJsIjoiaWdwaGVscC5mcmVzaGRlc2suY29tIiwiZXh0ZXJuYWxfaWQiOm51bGwsImRlbGV0ZWQiOjAsIm1vYmlsZSI6MSwiYWNjb3VudF9pZCI6bnVsbCwiY3JlYXRlZF9hdCI6IjIwMTUtMTAtMTJUMDc6MzY6NTMuMDAwWiIsInVwZGF0ZWRfYXQiOiIyMDE2LTAyLTEyVDA1OjU4OjAyLjAwMFoiLCJjYkRlZmF1bHRNZXNzYWdlcyI6eyJjb2Jyb3dzaW5nX3N0YXJ0X21zZyI6IllvdXIgc2NyZWVuc2hhcmUgc2Vzc2lvbiBoYXMgc3RhcnRlZCIsImNvYnJvd3Npbmdfc3RvcF9tc2ciOiJZb3VyIHNjcmVlbnNoYXJpbmcgc2Vzc2lvbiBoYXMgZW5kZWQiLCJjb2Jyb3dzaW5nX2RlbnlfbXNnIjoiWW91ciByZXF1ZXN0IHdhcyBkZWNsaW5lZCIsImNvYnJvd3Npbmdfdmlld2luZ19zY3JlZW4iOiJZb3UgYXJlIHZpZXdpbmcgdGhlIHZpc2l0b3LigJlzIHNjcmVlbiIsImNvYnJvd3NpbmdfY29udHJvbGxpbmdfc2NyZWVuIjoiWW91IGFyZSBjb250cm9sbGluZyB0aGUgdmlzaXRvcuKAmXMgc2NyZWVuIiwiY29icm93c2luZ19yZXF1ZXN0X2NvbnRyb2wiOiJSZXF1ZXN0IHZpc2l0b3IgZm9yIGNvbnRyb2wiLCJjb2Jyb3dzaW5nX3N0b3BfcmVxdWVzdCI6IkVuZCB5b3VyIHNjcmVlbnNoYXJpbmcgc2Vzc2lvbiIsImNvYnJvd3NpbmdfcmVxdWVzdF9jb250cm9sX3JlamVjdGVkIjoiWW91ciByZXF1ZXN0IHdhcyBkZWNsaW5lZCIsImNvYnJvd3NpbmdfY2FuY2VsX3Zpc2l0b3JfbXNnIjoiU2NyZWVuc2hhcmluZyBpcyBjdXJyZW50bHkgdW5hdmFpbGFibGUiLCJjYl92aWV3aW5nX3NjcmVlbl92aSI6IkFnZW50IGNhbiB2aWV3IHlvdXIgc2NyZWVuICIsImNiX2NvbnRyb2xsaW5nX3NjcmVlbl92aSI6IkFnZW50IGNhbiBjb250cm9sIHlvdXIgc2NyZWVuIiwiY2JfZ2l2ZV9jb250cm9sX3ZpIjoiQWxsb3cgYWdlbnQgdG8gY29udHJvbCB5b3VyIHNjcmVlbiIsImNiX3Zpc2l0b3Jfc2Vzc2lvbl9yZXF1ZXN0IjoiQ2FuIGFnZW50IGNvbnRyb2wgeW91ciBjdXJyZW50IHNjcmVlbj8ifX0="
        }
        e("#dialpad-content").hasClass("active") ? (e("#dialpad-content").removeClass("active"),
        e("#d-mask").removeClass("is-active"),
        e("html, body").removeClass("no-scroll"),
        t = !1) : (e(".currency-container").removeClass("active"),
        e("#dialpad-content").addClass("active"),
        e("#d-mask").addClass("is-active"),
        e("html, body").addClass("no-scroll"),
        t = !0,
        e(".dial-p-tooltip").hide(),
        e(".dial-p-tooltip2").hide(),
        e(".searched-text-container").hasClass("hide") || e(".searched-text-container").trigger("click"))
    }),
    e(".currency-icon").click(function(i) {
        i.stopPropagation(),
        e(".currency-container").hasClass("active") ? (e(".currency-container").removeClass("active"),
        e("#currency-black").removeClass("hide"),
        e("#currency-red").addClass("hide"),
        e("#d-mask").removeClass("is-active"),
        e("html, body").removeClass("no-scroll"),
        t = !1) : (e(".searched-text-container").hasClass("hide") || e(".searched-text-container").trigger("click"),
        e("#dialpad-content").removeClass("active"),
        e(".currency-container").addClass("active"),
        e("#currency-black").addClass("hide"),
        e("#currency-red").removeClass("hide"),
        e("#d-mask").addClass("is-active"),
        e("body").addClass("no-scroll"),
        t = !0)
    }),
    e(".dial-p-hover").hover(function() {
        t || e(".dial-p-tooltip").show()
    }, function() {
        e(".dial-p-tooltip").hide()
    }),
    e(".dph2").hover(function() {
        t || e(".dial-p-tooltip2").show()
    }, function() {
        e(".dial-p-tooltip2").hide()
    }),
    e(".color-prop ").hover(function() {
        e(this).children(".color-tooltip").show(),
        e(this).children(".ar-up-colr").show()
    }, function() {
        e(this).children(".color-tooltip").hide(),
        e(this).children(".ar-up-colr").hide()
    }),
    e("#d-mask").click(function() {
        e(".dialpad-content").removeClass("active"),
        e(".currency-container").removeClass("active"),
        e("#currency-black").removeClass("hide"),
        e("#currency-red").addClass("hide"),
        e("#d-mask").removeClass("is-active"),
        e("html, body").removeClass("no-scroll"),
        t = !1
    }),
    e(".chat-h").hover(function() {
        t || e(".dial-p-tooltip-chat").show()
    }, function() {
        e(".dial-p-tooltip-chat").hide()
    }),
    e(".chat-h2").hover(function() {
        t || e(".dial-p-tooltip-chat2").show()
    }, function() {
        e(".dial-p-tooltip-chat2").hide()
    }),
    e(".dialpad-content").click(function(t) {
        e("html, body").removeClass("no-scroll")
    }),
    e(".refine-list-item").hover(function() {
        e(".s-button").hasClass("opened") || e(this).find(".selectionbar-tooltip").show()
    }, function() {
        e(this).find(".selectionbar-tooltip").hide()
    }),
    e(".selectionbar-tooltip").mouseenter(function() {
        e(".selectionbar-tooltip").hide()
    }),
    e(".selection-bar-tooltip").mouseenter(function() {
        e(".selection-bar-tooltip").hide()
    }),
    e(".refine-list-item").click(function() {
        e(".selectionbar-tooltip").hide();
        var t, i, s;
        e(this).find(".s-button").length ? (t = "rro" === e(this).find(".s-button").data("item_subtype") ? e(this).find(".s-button").data("selected-type") : e(this).find(".s-button").text(),
        i = e(this).find(".view-page--link").attr("href"),
        s = e(this).find(".s-button").data("item_subtype")) : (t = e(this).find(".cat-button").text(),
        i = e(this).find("a").attr("href"));
        let o = {
            event: "navigation_click",
            item_name: t,
            item_position: e(this).index() + 1,
            item_url: i ? window.location.origin + i : "",
            navigation_subtype: s ? s : "cat",
            navigation_type: "primary"
        };
        pushDataLayer(o)
    });
    let i = !1;
    e(".refine-list-item").on("click", function() {
        if (!i) {
            i = !0;
            var t;
            t = e(this).find(".s-button").length ? "rro" === e(this).find(".s-button").data("item_subtype") ? e(this).find(".s-button").data("selected-type") : e(this).find(".s-button").text() : e(this).find(".cat-button").text();
            let s = {
                event: "p_nav_click",
                item_name: t,
                item_position: e(this).index() + 1
            };
            pushDataLayer(s)
        }
    }),
    e(".s-item-list-v2 li a").click(function(t) {
        t.stopPropagation();
        let i = {
            event: "navigation_click",
            item_name: e(this).find(".title-text").data("item_name"),
            item_position: e(this).find(".title-text").data("item_position"),
            subitem_name: e(this).find(".title-text").data("subitem_name"),
            subitem_position: e(this).find(".title-text").data("subitem_position"),
            item_url: "rro" === e(this).find(".title-text").data("item_subtype") ? e(this).find(".title-text").data("item_url") : window.location.origin + e(this).attr("href"),
            navigation_subtype: e(this).find(".title-text").data("item_subtype") ? e(this).find(".title-text").data("item_subtype") : "cat",
            navigation_type: "primary"
        };
        pushDataLayer(i)
    });
    var s = 55
      , o = 8;
    e(".selectionbar-tooltip.cat").css({
        width: e(".selectionbar-tooltip.cat").text().length * o
    });
    var n = e(".selectionbar-tooltip.cat").width() > e(".selectionbar-tooltip.cat").parent().width() ? "-" + (e(".selectionbar-tooltip.cat").width() - e(".selectionbar-tooltip.cat").parent().width() - s) + "px" : "10%";
    e(".selectionbar-tooltip.cat").css({
        left: n
    }),
    e(".selectionbar-tooltip.sub-cat").css({
        width: e(".selectionbar-tooltip.sub-cat").text().length * o
    });
    var n = e(".selectionbar-tooltip.sub-cat").width() > e(".selectionbar-tooltip.sub-cat").parent().width() ? "-" + (e(".selectionbar-tooltip.sub-cat").width() - e(".selectionbar-tooltip.sub-cat").parent().width() - s) + "px" : "10%";
    e(".selectionbar-tooltip.sub-cat").css({
        left: n
    }),
    e(".selectionbar-tooltip.prod-type").css({
        width: e(".selectionbar-tooltip.prod-type").text().length * o
    });
    var n = e(".selectionbar-tooltip.prod-type").width() > e(".selectionbar-tooltip.prod-type").parent().width() ? "-" + (e(".selectionbar-tooltip.prod-type").width() - e(".selectionbar-tooltip.prod-type").parent().width() - s) + "px" : "10%";
    e(".selectionbar-tooltip.prod-type").css({
        left: n
    }),
    document.addEventListener("keydown", function(i) {
        27 === (i.keyCode || i.which) && t && (e(".dialpad-content").removeClass("active"),
        e(".currency-container").removeClass("active"),
        e("#d-mask").removeClass("is-active"),
        t = !1)
    })
}(jQuery),
function() {
    function e() {
        $("ul.cart-items-list li").length && ($(".cart-list").scrollTop() > 50 ? $(".list-nav-top").addClass("active") : $(".list-nav-top").removeClass("active"),
        $(".cart-list").scrollTop() + $(".cart-list").height() + 5 >= $(".cart-items-list").outerHeight() ? $(".list-nav-bottom").removeClass("active") : $(".list-nav-bottom").addClass("active"))
    }
    var t = !1
      , i = !1;
    $(document).on("click", "#c-mask, #close-cart, #close-cart-2", function() {
        if ("/success" == window.location.pathname)
            window.location.href = "/";
        else {
            "close-cart-2" == $(this)[0].id && pushDataLayer({
                event: "continue_shopping",
                trigger: "cart_popup"
            }),
            s()
        }
    });
    var s = function() {
        i && ($(".cart-header-content").removeClass("open"),
        $(".cart-header-content").removeClass("expand"),
        $(".cart-header-content-icon").removeClass("open"),
        $(".cart-header-content").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function(e) {
            $("#cart").removeClass("is-active"),
            $("body").removeClass("no-scroll"),
            $("#c-mask").removeClass("is-active"),
            i = !1
        }),
        t = !1),
        window.currentProdIdDeleted && window.location.reload()
    }
      , o = 0
      , n = 75;
    e(),
    $(".list-nav-bottom").click(function() {
        o += n,
        $(".cart-list").animate({
            scrollTop: o
        }, 500, function() {})
    }),
    $(".list-nav-top").click(function() {
        o -= n,
        $(".cart-list").animate({
            scrollTop: o
        }, 500, function() {
            console.log(o)
        })
    }),
    $(".cart-list").on("scroll", function() {
        $(".cart-list").scrollTop() > 50 ? $(".list-nav-top").addClass("active") : $(".list-nav-top").removeClass("active"),
        $(".cart-list").scrollTop() + $(".cart-list").height() + 5 >= $(".cart-items-list").outerHeight() ? $(".list-nav-bottom").removeClass("active") : $(".list-nav-bottom").addClass("active")
    }),
    document.addEventListener("keydown", function(e) {
        27 === (e.keyCode || e.which) && t && (s(),
        window.history.go(-1))
    })
}(),
function() {
    function e() {
        $("#ham-menu").addClass("is-active"),
        $("#h-mask").addClass("is-active"),
        i = !0,
        $("body").addClass("no-scroll")
    }
    function t() {
        $("div#ham-menu").removeClass("is-active"),
        $("#h-mask").removeClass("is-active"),
        $("body").removeClass("no-scroll"),
        i = !1
    }
    var i = !1;
    $("#ham-icon, .ham-menu-wrapper").click(function() {
        e()
    }),
    $("#close-ham-menu, #h-mask").on("click", function() {
        t()
    }),
    document.addEventListener("keydown", function(e) {
        var s = e.keyCode || e.which;
        27 === s && !ChatOpen && $("#lc_chat_layout").hasClass("showChatBox") && $(".chat-me").click(),
        27 === s && i && (t(),
        window.location.hash && window.history.go(-1))
    })
}(),
function() {
    function e(e, t, i, s, o, n, a, r, l, d, c, h, u, p) {
        "DELETE" == t ? (pushDataLayer({
            event: "remove_shortlist",
            prods_id: parseInt(i),
            prods_name: s,
            prods_sku: o,
            prods_price: n,
            prods_type: a,
            barcodes: c,
            micrositename: micrositename,
            is_promoted: h,
            promoted_tag: u
        }),
        localStorage.removeItem("pid-" + i)) : (pushDataLayer({
            event: "add_shortlist",
            prods_id: parseInt(i),
            prods_name: s,
            prods_sku: o,
            prods_price: n,
            prods_type: a,
            barcodes: c,
            micrositename: micrositename,
            is_promoted: h,
            promoted_tag: u
        }),
        localStorage.setItem("pid-" + i, 1)),
        xhrObj = $.ajax({
            url: e,
            method: t,
            dataType: "json",
            data: JSON.stringify({
                pid: i,
                type: r,
                qty: l
            }),
            contentType: "application/json; charset=UTF-8",
            async: !0,
            cache: !0,
            beforeSend: function(e) {
                d.unbind("click"),
                xhrObj && xhrObj.abort()
            }
        }).done(function(e) {
            p(e)
        })
    }
    function t() {
        $(".slist-container").removeClass("active"),
        $("body").removeClass("no-scroll"),
        $("#s-mask").removeClass("is-active"),
        n = !1
    }
    function i() {
        $(".sl-overlay").removeClass("active"),
        $(".sl-pd-wrapper").addClass("move-down-hide")
    }
    function s(e, t, i, s, o) {
        $.ajax({
            url: "/api/shortlist",
            method: "PUT",
            data: JSON.stringify({
                pid: e,
                type: t,
                qty: i,
                page_type: s
            }),
            contentType: "application/json; charset=UTF-8",
            async: !1,
            cache: !0,
            beforeSend: function() {
                console.log("updating item"),
                $("#slist-loading-" + t + "-" + e).addClass("active")
            },
            success: function(i, s, n) {
                $("#slist-loading-" + t + "-" + e).removeClass("active"),
                o(i, t, e)
            }
        })
    }
    function o(e, t, i, s, o, n, a) {
        pushDataLayer({
            event: "remove_shortlist",
            prods_id: e,
            prods_name: i,
            prods_sku: s,
            prods_price: o,
            prods_type: n,
            micrositename: micrositename
        }),
        localStorage.removeItem("pid-" + e),
        $.ajax({
            url: "/api/shortlist",
            method: "DELETE",
            data: JSON.stringify({
                pid: e,
                type: t
            }),
            contentType: "application/json; charset=UTF-8",
            async: !0,
            cache: !0,
            beforeSend: function() {
                $("#slist-loading-" + t + "-" + e).addClass("active")
            },
            success: function(e, t, i) {
                a(e);
                var s = parseInt($(".sl-count:first").text());
                s > 0 && ($(".sl-count").text(s - 1),
                1 == s && ($(".sl-count").addClass("hide"),
                $(".igp-shortlist-red").addClass("hide"),
                $(".igp-shortlist-black").removeClass("hide")))
            }
        })
    }
    var n = !1;
    $(".slist-wrapper").click(function() {
        window.location.href = "/shortlist"
    }),
    $("body").on("click", ".slist-close, #s-mask, .close-slist", function() {
        "close-shortlist" == $(this)[0].id && pushDataLayer({
            event: "continue_shopping",
            trigger: "shortlist_popup"
        }),
        t()
    }),
    $(document).on("click", ".sl-star", function(t) {
        if ("product" === page_type || !t.target.closest(".shortlist-revamp")) {
            var i = $(this).data("pid")
              , s = $(this).data("pname")
              , o = $(this).data("sku")
              , n = parseInt($(this).data("mprice"))
              , a = $(this).data("vid")
              , r = $(this).data("is_promoted")
              , l = $(this).data("promoted_tag")
              , d = $(this).data("personalise")
              , c = "72" == a ? "Handels" : d ? "Personalised" : "Generic"
              , h = $(this).attr("data-in-slist")
              , u = "/api/shortlist"
              , p = $(this)
              , m = "POST"
              , f = 98 == $("body").data("type-two") ? 2 : 1
              , g = 1
              , v = $(this).data("barcode");
            1 == h && p.hasClass("in-slist") ? (p.find(".heart-icon").removeClass("active"),
            p.removeClass("active-heart"),
            m = "DELETE",
            e(u, m, i, s, o, n, c, f, g, p, v, r, l, function(e) {
                if (!e.shortlist.error) {
                    $('.shortlist-btn[data-pid="' + i + '"]').html("Shortlist"),
                    p.attr("data-in-slist", 0).removeClass("in-slist"),
                    $('.sl-shortlist[data-pid="' + i + '"]').bind("click"),
                    $('.sl-shortlist[data-pid="' + i + '"]').addClass("sl-shortlist").text("Shortlist").parents(".sl-add-link").attr("href", "javascript:void(0);");
                    var t = parseInt($(".sl-count:first").text());
                    t > 0 && ($(".sl-count").text(t - 1),
                    1 == t && ($(".sl-count").addClass("hide"),
                    $(".igp-shortlist-red").addClass("hide"),
                    $(".igp-shortlist-black").removeClass("hide")))
                }
                p.bind("click")
            })) : (p.find(".heart-icon").addClass("active"),
            p.addClass("active-heart"),
            $(".slist-qty-field-2-" + i + ":first").length > 0 && (g = parseInt($(".slist-qty-field-2-" + i + ":first").val())),
            e(u, m, i, s, o, n, c, f, g, p, v, r, l, function(e) {
                if (!e.shortlist.error) {
                    $('.shortlist-btn[data-pid="' + i + '"]').html("Shortlisted"),
                    p.attr("data-in-slist", 1).addClass("in-slist"),
                    $('.sl-shortlist[data-pid="' + i + '"]').off("click"),
                    $('.sl-shortlist[data-pid="' + i + '"]').removeClass("sl-shortlist").text("View Shortlist").parents(".sl-add-link").attr("href", "/shortlist");
                    var t = parseInt($(".sl-count:first").text());
                    $(".sl-count").text(t + 1),
                    $(".sl-count").removeClass("hide"),
                    $(".igp-shortlist-red").removeClass("hide"),
                    $(".igp-shortlist-black").addClass("hide")
                }
                p.bind("click")
            }))
        }
    }),
    $(document).on("click", ".sl-shortlist", function() {
        var e = $(this).data("pid");
        "Shortlisted" != $(this).text() && $('.sl-star[data-pid="' + e + '"]').click()
    }),
    $(document).on("click", ".slist-item-remove, .r-sl-icon-w", function() {
        var e = $(this).data("pid")
          , t = $(this).data("s-type");
        $("#slist-del-msg-" + t + "-" + e).addClass("active")
    }),
    $(document).on("click", ".shortlist-revamp .sl-star-wrapper-revamp", function() {
        var e = $(this).data("pid")
          , t = $(this).data("s-type");
        $("#slist-del-msg-" + t + "-" + e).addClass("active")
    }),
    $(document).on("click", ".slist-cancel-del", function() {
        var e = $(this).data("pid")
          , t = $(this).data("s-type")
          , i = $("#slist-qty-field-" + t + "-" + e);
        i.val(parseInt(i.data("qty"))),
        $("#slist-del-msg-" + t + "-" + e).removeClass("active")
    }),
    document.addEventListener("keydown", function(e) {
        var s = e.keyCode || e.which;
        27 === s && n ? (t(),
        window.location.hash && window.history.go(-1)) : 27 == s && i()
    }),
    $(document).on("keypress", "input[type=text].slist-qty-field", function(e) {
        var t = $(this).data("pid");
        e && 13 == e.keyCode && $('.slist-qty-field[data-pid="' + t + '"]').blur()
    }),
    $(document).on("focus", "input[type=text].slist-qty-field", function() {
        $(this).parents(".qty-col").find(".edit-qty-text > a").text("Get price")
    });
    var a = !1;
    $(document).on("click", ".edit-qty-text", function() {
        a || "Edit quantity" == $(this).find("a").text() && ($(this).parents(".qty-col").find(".slist-qty-field").focus(),
        $(this).find("a").text("Get price")),
        a = !1
    }),
    $(document).on("focusout, blur", "input[type=text].slist-qty-field", function() {
        var e = $(this).data("pid")
          , t = $(this).data("s-type")
          , i = $(this).attr("data-qty")
          , o = $(this).val();
        $(this).parents(".qty-col").find(".edit-qty-text > a").text("Edit quantity"),
        a = !0,
        "" == o ? $(this).val(parseInt(i)) : 0 == o ? ($("#slist-del-msg-" + t + "-" + e).addClass("active"),
        $(".slist-qty-error-2-" + e).removeClass("show")) : ($(this).removeClass("error error-animation"),
        $(".slist-qty-error-2-" + e).removeClass("show"),
        s(e, t, parseInt(o), page_type, function(e, t, i) {
            if (e.shortlist && !e.shortlist.error)
                $("#s-mrp-" + t + "-" + i).text(" " + getCartPagePrice(e.shortlist.price, "sl-mrp", currency, "val") + " "),
                $("input[type=text].slist-qty-field").hasClass("corp-slist-qty-field") ? $(".u-mrp-" + t + "-" + i).html(getCartPagePrice(e.shortlist.price, "productquoteprice", currency, "", !0)) : $(".u-mrp-" + t + "-" + i).text(getCartPagePrice(e.shortlist.price, "productquoteprice", currency, "val")),
                $(".slist-qty-field-" + t + "-" + i).attr("value", o),
                $(".slist-qty-text-" + t + "-" + i).html(o),
                $(".slist-qty-field-" + t + "-" + i).attr("data-qty", parseInt(o));
            else if (e.error) {
                var s = $(this);
                s.addClass("error error-animation"),
                setTimeout(function() {
                    s.removeClass("error-animation")
                }, 300),
                $("#slist-qty-error-2-" + i)[0].innerText = e.error,
                $(".slist-qty-error-2-" + i).addClass("show")
            }
        }))
    }),
    $(document).on("keypress", "input[type=text].slist-qty-field", function(e) {
        for (var t = [], i = e.which, s = 48; s < 58; s++)
            t.push(s);
        t.indexOf(i) >= 0 || e.preventDefault()
    }),
    $(document).on("click", ".slist-remove", function() {
        var e = $(this).data("pid")
          , t = $(this).data("s-type")
          , i = $(this).data("pname")
          , s = $(this).data("sku")
          , n = parseInt($(this).data("mprice"))
          , a = $(this).data("vid")
          , r = $(this).data("personalise");
        o(e, t, i, s, n, "72" == a ? "Handels" : r ? "Personalised" : "Generic", function(i) {
            i.shortlist.error || $(".slist-item-" + t + "-" + e).slideUp(function() {
                $(".slist-item-" + t + "-" + e).remove(),
                $('.sl-star.in-slist[data-pid="' + e + '"]').attr("data-in-slist", 0).removeClass("in-slist"),
                $(".g-sl-count").html(parseInt($(".g-sl-count").html()) - 1),
                $(".shortlist-head-count span").html(parseInt($(".shortlist-head-count span").html()) - 1),
                0 == $("#corp-items #product-grid .product-grid-item").length && 0 == $("#gen-items #product-grid .product-grid-item").length ? ($("#slist-wrapper").addClass("hide"),
                $("#empty-slist-wrapper").removeClass("hide")) : 2 == t ? 0 == $("#corp-items #product-grid .product-grid-item").length && ($("#corp-items").remove(),
                $(".general-items").removeClass("half-height")) : 0 == $("#gen-items #product-grid .product-grid-item").length && ($("#gen-items").remove(),
                $(".corporate-items").removeClass("half-height")),
                $(".slist-remove").length || getCollections()
            })
        })
    }),
    $(document).on("click", ".sl-c-details", function() {
        var e = $(this).data("pid")
          , t = $(this)
          , i = $(".selection-bar-w").data("type-two") ? $(".selection-bar-w").data("type-two") : 1;
        $("#sl-pd-wrapper-" + e).length > 0 ? ($(".sl-overlay").addClass("active"),
        $("#sl-pd-wrapper-" + e).removeClass("move-down-hide")) : $.ajax({
            url: "/api/product/details",
            method: "POST",
            data: JSON.stringify({
                pid: e,
                type2: i
            }),
            contentType: "application/json; charset=UTF-8",
            async: !0,
            cache: !0,
            beforeSend: function(e) {
                $(".sl-overlay").addClass("active")
            },
            success: function(e, i, s) {
                $("body").append(e);
                var o = t.data("pid");
                $(".thumbnail-list.sl-layer").slick({
                    infinite: !1,
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    accessibility: !1,
                    dots: !1,
                    arrows: !0,
                    gateway: !1
                }).show().resize(),
                $(".thumbnail-list").on("click", "button.slick-arrow", function() {
                    $(".thumbnail-list .slick-slide.slick-active:first img")
                }),
                lazyLoadImgs(),
                lazyLoadImgs(),
                $("#big-image-999-" + o).load(function() {
                    setTimeout(function() {
                        $("#big-image-999-" + o).removeClass("blur")
                    }, 500)
                }),
                $(document).on("mouseover", ".thumbnail-img.sl-layer img", function() {
                    var e = $(this);
                    $(".thumbnail-img.sl-layer img").removeClass("check"),
                    e.addClass("check");
                    var t = e.data("imageid");
                    $(".big-image.sl-layer").addClass("hide"),
                    $("#big-image-" + t).removeClass("hide"),
                    lazyLoadImgs(),
                    $("#big-image-" + t).load(function() {
                        setTimeout(function() {
                            $("#big-image-" + t).removeClass("blur")
                        }, 500)
                    })
                }),
                $('.sl-star[data-pid="' + o + '"]').hasClass("in-slist") && ($('.sl-shortlist[data-pid="' + o + '"]').text("View Shorlist").parents(".sl-add-link").attr("href", "/shortlist"),
                $('.sl-shortlist[data-pid="' + o + '"]').removeClass("sl-shortlist"))
            },
            error: function(e) {
                console.log("error")
            }
        })
    }),
    $(document).on("click", ".sl-add-cart", function() {
        var e = $(this).data("buynow")
          , t = $(this)
          , i = t.data("pid")
          , s = $(this).parents(".product-grid-item").find(".slist-qty-field").val()
          , o = $(".sl-pd-wrapper").find(".slist-qty-field").val()
          , n = new Date;
        n.setDate(n.getDate() + 4);
        var a = n.getDate()
          , r = n.getMonth() + 1
          , l = n.getFullYear();
        a = a < 10 ? "0" + a : a,
        r = r < 10 ? "0" + r : r;
        var d = l.toString() + r.toString() + a.toString()
          , c = {
            pid: i,
            qty: e ? "sdesc" === e ? o : s : 1,
            ptype: "main",
            gbox: 0,
            scity: "",
            pin: 0,
            scountry: 99,
            attr: {},
            sdate: d,
            stype: 1,
            stime: ""
        };
        $.ajax({
            url: "/c/addpers",
            method: "POST",
            dataType: "json",
            data: JSON.stringify(c),
            contentType: "application/json; charset=UTF-8",
            processData: !1,
            beforeSend: function() {},
            success: function() {
                console.log("added to cart"),
                t.text("View in Cart").removeClass("sl-add-cart"),
                t.parents(".sl-add-link").attr("href", "/cart")
            },
            error: function() {}
        })
    }),
    $(document).on("click", ".close-sl-layer, .sl-pd-wrapper", function(e) {
        i()
    }),
    $(document).on("click", ".sl-pd-container", function(e) {
        e.stopPropagation()
    })
}(jQuery),
function() {
    var e, t, i = !1, s = new Array(0), o = {}, n = "login";
    window.LoadLoginPanel = !1,
    $(".user-menu").click(function() {
        $(".login-tooltip").hide(),
        $(".searched-text-container").hasClass("hide") || $(".searched-text-container").trigger("click"),
        $(this).hasClass("loginn") || $("#user-menu").hasClass("loginn") || $("li#user-menu-short").hasClass("loginn") ? (setCookie("login-referrer", window.location.href, null, "nopath"),
        "/cart" == window.location.pathname ? sessionStorage.setItem("login-path", "cart") : sessionStorage.setItem("login-path", "profile"),
        window.location.assign("/login")) : window.location.hash = "#login-user"
    });
    var a = function() {
        $(".login").removeClass("left"),
        $(".login").addClass("right"),
        $("#nav-back").addClass("hide")
    };
    $(document).on("click", "#nav-close", function() {
        hideBlock(),
        window.history.go(-1)
    }),
    showBlock = function() {
        $("#user-data").data("userid") || window.LoadLoginPanel || (user || $("#acc-menu").css({
            background: "none"
        }),
        window.LoadLoginPanel = !0,
        getSignUpTemplate(function(e) {
            user || $("#acc-menu").html(e)
        })),
        $("#u-mask").addClass("is-active"),
        $("body").addClass("no-scroll"),
        $("#acc-menu .lazy-login-img").attr("src", $("#acc-menu .lazy-login-img").data("original")),
        window.setTimeout(function() {
            $("#acc-menu").hasClass("login-block") || ($("#acc-menu").addClass("revamp"),
            $(".logged-user").find(".icon-wrapper.top-action-icons").addClass("log_clicked")),
            $("#acc-menu").addClass("is-active"),
            $("#" + n).removeClass("right"),
            $("#" + n).slideDown()
        }, 500),
        i = !0
    }
    ,
    hideBlock = function() {
        $(".submit_msg").text(""),
        s = [],
        $(".sign-up-text").data("source", "login").removeClass("up"),
        $("#acc-menu").hasClass("login-block") || ($("#acc-menu").removeClass("revamp"),
        $(".logged-user").find(".icon-wrapper.top-action-icons").removeClass("log_clicked")),
        $("#acc-menu").removeClass("is-active"),
        $("body").removeClass("no-scroll"),
        a(),
        window.setTimeout(function() {
            $("#u-mask").removeClass("is-active")
        }, 500),
        i = !1
    }
    ,
    $(document).ready(function() {
        $("#instagram-feed").length > 0 && $(document).scroll(function() {
            var e = $("#instagram-feed").offset().top + 100
              , t = $("#instagram-feed").outerHeight()
              , i = $(window).height();
            $(this).scrollTop() > e + t - i && (instagramFeed(),
            $(document).unbind("scroll"))
        });
        var i = $(".banner-wrapper").data("bnr")
          , s = "";
        if (i)
            for (var o = 1; o < i.length; o++)
                s += i[o] && i[o].url ? '<div><a target="_blank" href="' + i[o].url + '"><div  class="banner-overlay"></div><img class="img-responsive lazy-load-image banner-image" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" data-original="' + cdn.bannersURL + i[o].image + '"/></a></div>' : '<div><div  class="banner-overlay"></div><img class="img-responsive lazy-load-image banner-image" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" data-original="' + cdn.bannersURL + i[o].image + '"/></div>';
        $(".corp-home-banner-carousel").append(s),
        $(".corp-home-banner-carousel").slick({
            infinite: !0,
            lazyLoad: "progressive",
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: !0,
            autoplaySpeed: 6e3,
            accessibility: !1,
            dots: !0,
            arrows: !1
        }).show();
        var n = $("#acc-menu").data("loginrequired")
          , a = document.getElementById("prod-desc") || $(".pdp-descInfo-container").length;
        n !== !1 && (n = !0),
        !corpLabel || $("#user-data").data("userid") || window.LoadLoginPanel || !n || a || "/" === location.pathname || "/cart" === location.pathname || "/checkout" === location.pathname || "/egvcheckout" === location.pathname || "/shortlist" === window.location.pathname || ($("#user-data").data("userid") ? showBlock() : "/login" !== location.pathname && $(".user-menu").click()),
        $(document).on("click", ".click-listener", function() {
            e = $(this).data("source"),
            t = $(this).data("target"),
            l(e, t)
        }),
        $(".currency-change").click(function() {
            var e = $(this).data("value");
            onclickDataLayer("currency_toggle", {
                current_currency: $(".currency-change.selected") && $(".currency-change.selected").data("value"),
                new_currency: e
            });
            var t = {
                currency: e
            };
            let i = location.href.split("?");
            $.ajax({
                url: "/api/currency/change",
                method: "POST",
                data: JSON.stringify(t),
                contentType: "application/json; charset=UTF-8",
                async: !0,
                beforeSend: function() {
                    NProgress.start()
                },
                success: function() {
                    location.href = i[0],
                    window.location.reload()
                },
                error: function() {
                    NProgress.done()
                }
            })
        })
    });
    var r = function(e) {
        "sign-up-1" === e ? ($(".datepicker").pickadate({
            format: "dd-mmm-yyyy",
            format_submit: "yyyy-mm-dd",
            selectYears: 100,
            selectMonths: !0,
            hiddenName: !0,
            max: !0,
            disable: [!0, {
                from: [today.getFullYear() - 100, today.getMonth(), today.getDate()],
                to: [today.getFullYear(), today.getMonth(), today.getDate()]
            }],
            today: "",
            clear: "",
            close: ""
        }),
        $(".sign-up-text").addClass("up")) : $(".sign-up-text").removeClass("up").data("source", e),
        $("#" + e).find("input").removeClass("error").next("label").find("span.error-msg").text("")
    }
      , l = function(e, t) {
        $(".submit_msg").removeClass("has_error").hide(),
        o = {
            current: e,
            target: t
        },
        s.push(o),
        $("#" + t).find("input").removeClass("error"),
        $("#" + e).removeClass("left right"),
        $("#" + e).addClass("left"),
        $("#" + t).removeClass("left right"),
        e = t,
        $("#" + e).data("backbutton") ? $("#nav-back").removeClass("hide") : $("#nav-back").addClass("hide"),
        r(e)
    };
    $(document).on("click", "#nav-back", function() {
        var e = s.pop()
          , t = e.current;
        $("#" + t).data("backbutton") ? $("#nav-back").removeClass("hide") : $("#nav-back").addClass("hide"),
        $("#" + e.current).find("input").removeClass("error"),
        $("#" + e.target).addClass("right"),
        $("#" + e.current).removeClass("left right"),
        r(t)
    }),
    $("#u-mask").click(function() {
        $("#acc-menu").hasClass("is-active") && window.history.go(-1),
        $("body").removeClass("has-active-menu"),
        $("body").removeClass("no-scroll"),
        window.setTimeout(function() {
            $("#u-mask").removeClass("is-active")
        }, 500)
    }),
    document.addEventListener("keydown", function(e) {
        27 === (e.keyCode || e.which) && i && (window.location.hash && window.history.go(-1),
        hideBlock())
    })
}(),
function() {
    if (!corpLabel) {
        var e = document.getElementById("morphsearch")
          , t = document.querySelector("input.morphsearch-input")
          , i = (document.querySelector("span.morphsearch-close"),
        !1);
        toggleSearch = function(s) {
            i && "#search" !== window.location.hash ? (t.blur(),
            $(e).removeClass("open"),
            $("header").removeClass("first-layer"),
            $(".header-container").removeClass("full-height"),
            $("body").removeClass("no-scroll"),
            $(".gc-mm-wrapper").removeClass("index-1"),
            $(".mm-wrapper").removeClass("index-1")) : ($(e).addClass("open"),
            $("header").addClass("first-layer"),
            $(".header-container").addClass("full-height"),
            $("body").addClass("no-scroll"),
            $(".gc-mm-wrapper").addClass("index-1"),
            $(".mm-wrapper").addClass("index-1"),
            $("img.lazySearch").addClass("lazy"),
            lazyLoadImgs()),
            i = !i
        }
        ;
        document.addEventListener("keydown", function(e) {
            e.keyCode || e.which
        })
    }
}(),
window.onfocus = function() {
    1 == getCookie("flag") && (document.cookie = "flag=0",
    location.reload())
}
;
;"use strict";
function handleTabs(e) {
    var t = e;
    if (!$(t).hasClass("disabled")) {
        var i = $(t).attr("id")
          , s = i.split("_")
          , o = s[s.length - 1];
        $(".c-tab" + o).removeClass("selected"),
        $(".c-tab" + o + "-blk").addClass("hide"),
        $("#" + i).addClass("selected");
        var n = "#" + i + "_blk";
        $(n).removeClass("hide")
    }
}
var test0001;
$(document).ready(function() {
    $(".c-tab").on("click", function() {
        handleTabs(this)
    })
});
;"use strict";
function checkEmailFormat(e) {
    return !!/^(([^<>{}()[\]\\.,;:\s@\"]+(\.[^<>{}()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)
}
!function(e) {
    function t(t, i) {
        return "" === t ? (e("#email").parent().addClass("error"),
        e("#l-e-msg").text("This is a required Field"),
        e("#email").focus(),
        !1) : checkEmailFormat(t) ? "" === i ? (e("#email").parent().removeClass("error"),
        e("#l-e-msg").text(""),
        e("#passwd").parent().addClass("error"),
        e("#l-p-msg").text("This is a required Field"),
        e("#passwd").focus(),
        !1) : (e("#passwd").parent().removeClass("error"),
        e("#l-p-msg").text(""),
        s = !0,
        !0) : (e("#email").parent().addClass("error"),
        e("#l-e-msg").text("Please enter a valid email address"),
        e("#email").focus(),
        !1)
    }
    function i(t, i) {
        if ("" === t ? (e("#email").parent().addClass("error"),
        e("#l-e-msg").text("This is a required Field"),
        s = !1) : checkEmailFormat(t) ? (e(".email").removeClass("error"),
        e("#l-e-msg").text(""),
        s = !0) : (e("#email").parent().addClass("error"),
        e("#l-e-msg").text("Please enter a valid email address"),
        s = !1),
        s) {
            if ("" !== i)
                return e(".passwd").removeClass("error"),
                e("#l-p-msg").text(""),
                !0;
            e(".email").removeClass("error"),
            e("#l-e-msg").text(""),
            e("#passwd").parent().addClass("error"),
            e("#l-p-msg").text("This is a required Field")
        }
    }
    var s;
    e.fn.loginValidate = function() {
        var s = !1
          , o = e.trim(this.find("#email").val())
          , n = e.trim(this.find("#passwd").val());
        return s = t(o, n),
        e(".input").bind("keypress keyup keydown", function() {
            o = e.trim(e("#email").val()),
            n = e.trim(e("#passwd").val()),
            i(o, n)
        }),
        s
    }
}(jQuery),
function(e) {
    function t(t) {
        return "" === t ? (e("#f-email").parent().addClass("error"),
        e("#f-e-msg").text("This is a required Field"),
        e("#f-email").focus(),
        !1) : checkEmailFormat(t) ? (e("#f-email").parent().removeClass("error"),
        e("#f-e-msg").text(""),
        !0) : (e("#f-email").parent().addClass("error"),
        e("#f-e-msg").text("Please enter a valid email address"),
        e("#f-email").focus(),
        !1)
    }
    function i(t) {
        if ("" === t)
            e("#f-email").parent().addClass("error"),
            e("#f-e-msg").text("This is a required Field");
        else {
            if (checkEmailFormat(t))
                return e("#f-email").parent().removeClass("error"),
                e("#f-e-msg").text(""),
                !0;
            e("#f-email").parent().addClass("error"),
            e("#f-e-msg").text("Please enter a valid email address")
        }
    }
    e.fn.forgotPassValidate = function() {
        console.log(this);
        var s, o = e.trim(this.find("#f-email").val());
        return console.log(o),
        s = t(o),
        e(".input").bind("keypress keyup keydown", function() {
            var t = e(this).val();
            console.log(t),
            i(t)
        }),
        s
    }
}(jQuery),
function(e) {
    e.fn.signUpValidate = function() {
        return console.log(this),
        !1
    }
}(jQuery),
function(e) {
    function t(e) {
        return !!/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)
    }
    var i, s = !0, o = !1;
    e.fn.fValidate = {
        init: function(t) {
            return i = 0,
            e.fn.fValidate.validateForm(t),
            console.log(i),
            i > 0 ? (console.log("Has Errors"),
            !1) : (console.log("No Errors"),
            !0)
        },
        validateForm: function(t) {
            function i(t) {
                e.each(t, function(t, i) {
                    if (!o)
                        switch (t) {
                        case "required":
                            o = e.fn.fValidate.checkRequired(n, a);
                            break;
                        case "email":
                            o = e.fn.fValidate.checkEmail(n, a);
                            break;
                        case "number":
                            o = e.fn.fValidate.checkNumber(n, a);
                            break;
                        case "maxlength":
                            o = e.fn.fValidate.checkMaxLength(n, a, i);
                            break;
                        case "minlength":
                            o = e.fn.fValidate.checkMinLength(n, a, i)
                        }
                }),
                o = !1
            }
            for (var s in t) {
                var n = t[s].field_name
                  , a = t[s].field_value;
                i(t[s].rules)
            }
        },
        checkRequired: function(t, o) {
            return "" === o || void 0 === o ? (e("#" + t).addClass("error"),
            i++,
            console.log("req"),
            s = !0) : (e("#" + t).removeClass("error"),
            s = !1)
        },
        checkEmail: function(o, n) {
            return t(n) ? (e("#" + o).removeClass("error"),
            s = !1) : (e("#" + o).addClass("error"),
            i++,
            s = !0,
            console.log("email"),
            s)
        },
        checkNumber: function(t, o) {
            return isNaN(o) ? (e("#" + t).addClass("error"),
            i++,
            s = !0,
            console.log("number"),
            s) : (e("#" + t).removeClass("error"),
            s = !1)
        },
        checkMaxLength: function(t, o, n) {
            return o.length > n ? (e("#" + t).addClass("error"),
            i++,
            s = !0,
            console.log("max"),
            s) : (e("#" + t).removeClass("error"),
            s = !1)
        },
        checkMinLength: function(t, o, n) {
            return o.length < n ? (e("#" + t).addClass("error"),
            i++,
            s = !0,
            console.log("min"),
            s) : (e("#" + t).removeClass("error"),
            s = !1)
        }
    }
}(jQuery),
function(e) {
    function t(e) {
        var t = /^(([^<>{}()[\]\\.,;:\s@\"]+(\.[^<>{}()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return !e || !!t.test(e)
    }
    function i(e, t) {
        var i;
        return i = t && null != t && void 0 != t && 99 != t && 91 != t ? /^[0-9]*$/ : /^[6-9][0-9]{9}$/,
        !!i.test(e)
    }
    var s, o;
    let n = [];
    e.fn.fmValidate = {
        formId: null,
        init: function(t) {
            this.formId = t,
            console.log("form Id :" + t),
            s = 0;
            var i = e(t)
              , o = i.find(".input");
            return e.fn.fmValidate.startValidation(o),
            !(s > 0)
        },
        startValidation: function(t) {
            function i(t) {
                var i = e(t).attr("class").split(/\s+/);
                e.each(i, function(i, s) {
                    if (o)
                        switch (s) {
                        case "required":
                            o = e.fn.fmValidate.checkRequired(t);
                            break;
                        case "email":
                            o = e.fn.fmValidate.checkEmail(t);
                            break;
                        case "mobile":
                            o = e.fn.fmValidate.checkMobile(t);
                            break;
                        case "altmobile":
                            o = e.fn.fmValidate.checkAlternateMobile(t);
                            break;
                        case "number":
                            o = e.fn.fmValidate.checkNumber(t);
                            break;
                        case "nonzero":
                            o = e.fn.fmValidate.checkNonZero(t);
                            break;
                        case "nonascii":
                            o = e.fn.fmValidate.checkNonAscii(t);
                            break;
                        case "maxlength":
                            o = e.fn.fmValidate.checkMaxLength(t);
                            break;
                        case "minlength":
                            o = e.fn.fmValidate.checkMinLength(t);
                            break;
                        case "length":
                            o = e.fn.fmValidate.checkLength(t);
                            break;
                        case "minval":
                            o = e.fn.fmValidate.checkminVal(t);
                            break;
                        case "maxval":
                            o = e.fn.fmValidate.checkmaxVal(t);
                            break;
                        case "pincode":
                            o = e.fn.fmValidate.checkPincode(t);
                            break;
                        case "v-corp-label":
                            o = e.fn.fmValidate.checkDomainEmail(t)
                        }
                })
            }
            e.each(t, function(t, s) {
                o = !0,
                e(s).prop("disabled") || i(s)
            })
        },
        checkRequired: function(t) {
            return "" === e(t).val().trim() ? (s++,
            e(t).addClass("error"),
            e(t).addClass("error-animation"),
            setTimeout(function() {
                e(t).removeClass("error-animation")
            }, 300),
            console.log("The field cannot be empty"),
            e(t).next("label").find(".error-msg").text("The field cannot be empty"),
            !1) : (e(t).removeClass("error"),
            e(t).next().find(".error-msg").text(""),
            !0)
        },
        checkEmail: function(i) {
            var o = e(i);
            return t(o.val().trim()) ? (o.removeClass("error"),
            e(i).next().find(".error-msg").text(""),
            !0) : (s++,
            console.log("Not a valid email address"),
            o.addClass("error"),
            o.addClass("error error-animation"),
            setTimeout(function() {
                o.removeClass("error-animation")
            }, 300),
            e(i).next("label").find(".error-msg").text("Please enter a valid email"),
            !1)
        },
        checkMobile: function(t) {
            n.push(e(t).val());
            var o = this
              , a = 99;
            return 0 === e(o.formId).find("input[name=mprefix]").length && 0 === e(o.formId).find("input[name=cid]").length || (a = e(o.formId).find("input[name=mprefix]").val() || e(o.formId).find("input[name=cid]").val()),
            i(e(t).val(), a) ? (e(t).removeClass("error"),
            e(t).next().find(".error-msg").text(""),
            !0) : (s++,
            e(t).addClass("error"),
            e(t).addClass("error error-animation"),
            setTimeout(function() {
                e(t).removeClass("error-animation")
            }, 300),
            e(t).next("label").find(".error-msg").text("Invalid mobile number"),
            !1)
        },
        checkAlternateMobile: function(t) {
            if (n.push(e(t).val()),
            "" == e(t).val())
                return !0;
            var o = this
              , a = 99;
            return 0 === e(o.formId).find("input[name=mprefix]").length && 0 === e(o.formId).find("input[name=cid]").length || (a = e(o.formId).find("input[name=mprefix]").val() || e(o.formId).find("input[name=cid]").val()),
            i(e(t).val(), a) ? (e(t).removeClass("error"),
            e(t).next().find(".error-msg").text(""),
            !0) : (s++,
            e(t).addClass("error"),
            e(t).addClass("error error-animation"),
            setTimeout(function() {
                e(t).removeClass("error-animation")
            }, 300),
            e(t).next("label").find(".error-msg").text("Invalid mobile number"),
            !1)
        },
        checkMinLength: function(t) {
            var i = e(t)
              , o = i.attr("minlength") || i.data("minlength");
            return i.val().length < o ? (s++,
            i.addClass("error"),
            i.addClass("error error-animation"),
            setTimeout(function() {
                i.removeClass("error-animation")
            }, 300),
            console.log("The value should be atleast " + o + " characters long"),
            e(t).next("label").find(".error-msg").text("Password to be minimum " + o + " characters long"),
            !1) : (i.removeClass("error"),
            e(t).next().find(".error-msg").text(""),
            !0)
        },
        checkMaxLength: function(t) {
            var i = e(t)
              , o = i.attr("maxlength") || i.data("maxlength");
            return i.val().length > o ? (s++,
            i.addClass("error"),
            i.addClass("error error-animation"),
            setTimeout(function() {
                i.removeClass("error-animation")
            }, 300),
            console.log("The value can't be more than " + o + " characters long"),
            e(t).next("label").find(".error-msg").text("The value can't be more than " + o + " characters long"),
            !1) : (i.removeClass("error"),
            e(t).next().find(".error-msg").text(""),
            !0)
        },
        checkLength: function(t) {
            var i = e(t)
              , o = i.attr("length") || i.data("length");
            return i.val().length != o ? (s++,
            i.addClass("error"),
            i.addClass("error error-animation"),
            setTimeout(function() {
                i.removeClass("error-animation")
            }, 300),
            console.log("The value should be only " + o + " characters long"),
            e(t).next("label").find(".error-msg").text("The value should be only " + o + " characters long"),
            !1) : (i.removeClass("error"),
            e(t).next().find(".error-msg").text(""),
            !0)
        },
        checkminVal: function(t) {
            var i = e(t)
              , o = i.attr("minval")
              , n = i.val();
            return Number(n) < Number(o) ? (s++,
            i.addClass("error"),
            i.addClass("error error-animation"),
            setTimeout(function() {
                i.removeClass("error-animation")
            }, 300),
            console.log("The value should be " + o),
            e(t).next("label").find(".error-msg").text("The value should be " + o),
            !1) : (i.removeClass("error"),
            e(t).next().find(".error-msg").text(""),
            !0)
        },
        checkmaxVal: function(t) {
            var i = e(t)
              , o = i.attr("maxval")
              , n = i.val();
            return Number(n) > Number(o) ? (s++,
            i.addClass("error"),
            i.addClass("error error-animation"),
            setTimeout(function() {
                i.removeClass("error-animation")
            }, 300),
            console.log("The value should be max " + o),
            e(t).next("label").find(".error-msg").text("The value should be max " + o),
            !1) : (i.removeClass("error"),
            e(t).next().find(".error-msg").text(""),
            !0)
        },
        checkNumber: function(t) {
            var i = e(t)
              , o = i.val();
            return isNaN(o) ? (s++,
            i.addClass("error"),
            i.addClass("error error-animation"),
            setTimeout(function() {
                i.removeClass("error-animation")
            }, 300),
            console.log("The field should be a number"),
            e(t).next("label").find(".error-msg").text("The field should be a number"),
            !1) : (i.removeClass("error"),
            e(t).next().find(".error-msg").text(""),
            !0)
        },
        checkNonZero: function(t) {
            var i = e(t);
            return 0 === parseInt(i.val()) ? (s++,
            i.addClass("error"),
            i.addClass("error error-animation"),
            setTimeout(function() {
                i.removeClass("error-animation")
            }, 300),
            console.log("The field should be a Non-zero"),
            e(t).next("label").find(".error-msg").text("The field should non-zero"),
            !1) : (i.removeClass("error"),
            e(t).next().find(".error-msg").text(""),
            !0)
        },
        checkNonAscii: function(t) {
            var i = e(t)
              , o = i.val().trim();
            return /[^\x00-\x7F]+/.test(o) ? (s++,
            i.addClass("error"),
            i.addClass("error error-animation"),
            setTimeout(function() {
                i.removeClass("error-animation")
            }, 300),
            console.log("The field should be a Non-ascii"),
            e("#ascii-error-msg").removeClass("hide"),
            e(t).parents("form").find(".ascii-error-msg").text("There are some unsupported special characters or emojis in the message. Please edit/re-type message in the box"),
            !1) : (i.removeClass("error"),
            e("#ascii-error-msg").addClass("hide"),
            e(t).parents("form").find(".ascii-error-msg").text(""),
            !0)
        },
        checkPincode: function(t) {
            var i = e(t)
              , o = parseInt(i.val());
            return 0 === o || 777777 === o || 888888 === o || 999999 === o ? (s++,
            i.addClass("error"),
            i.addClass("error error-animation"),
            setTimeout(function() {
                i.removeClass("error-animation")
            }, 300),
            console.log("The field should be a Non-zero"),
            e(t).next("label").find(".error-msg").text("Pincode is not valid"),
            !1) : (i.removeClass("error"),
            e(t).next().find(".error-msg").text(""),
            !0)
        },
        checkDomainEmail: function(t) {
            var i = e(t)
              , o = i.val()
              , n = i.data("domains").split(",");
            return n.indexOf(o.split("@")[1]) > -1 || n.indexOf("all*") > -1 ? (i.removeClass("error"),
            e(t).next().find(".error-msg").text(""),
            !0) : (s++,
            i.addClass("error"),
            i.addClass("error error-animation"),
            setTimeout(function() {
                i.removeClass("error-animation")
            }, 300),
            e(t).next("label").find(".error-msg").text("Please enter your official email address"),
            !1)
        },
        checkType: function(e) {
            return t(e) ? "email" : !!i(e, null) && "mobile"
        }
    }
}(jQuery);
;"use strict";
!function() {
    function e() {
        var e = $(window).height()
          , t = $(document).scrollTop()
          , i = t
          , s = t + e;
        $(d).each(function(e) {
            var t = $(this).offset().top
              , o = t + $(this).height();
            if (u.indexOf($(this).data("item_name")) === -1 && (t >= i && (t + o) / 2 < s || o >= i && o < s) && ($(this).parents(".slick-active").length || 1 === $(".hb-ca-re .banner-slide").length)) {
                var a = n ? parseInt($(this).data("item_position")) + 1 : $(this).data("item_position")
                  , r = {
                    event: "banner_impression",
                    item_url: window.location.origin + $(this).data("item_url"),
                    item_name: $(this).data("item_name"),
                    item_position: a,
                    banner_live_date: $(this).data("banner_live_date"),
                    banner_category: "home",
                    micrositename: micrositename
                };
                dataLayer.push(r),
                u.push($(this).data("item_name"))
            }
        }),
        r && $(r).each(function(e) {
            var t = $(this).offset().top
              , o = t + $(this).height();
            if (p.indexOf($(this).data("item_name")) === -1 && (t >= i && (t + o) / 2 < s || o >= i && o < s)) {
                var a = n ? parseInt($(this).data("item_position")) + 1 : $(this).data("item_position")
                  , r = {
                    event: "banner_impression",
                    item_url: window.location.origin + $(this).data("item_url"),
                    item_name: $(this).data("item_name"),
                    item_position: a,
                    banner_live_date: $(this).data("banner_live_date"),
                    banner_category: "strip banner",
                    micrositename: micrositename
                };
                dataLayer.push(r),
                p.push($(this).data("item_name"))
            }
        })
    }
    function t() {
        var e = $(window).height()
          , t = $(document).scrollTop()
          , i = t
          , s = t + e;
        $(c).each(function(e) {
            if (!$(this).parent().parent().hasClass("slick-cloned")) {
                var t = $(this).offset().top
                  , o = t + $(this).height();
                if (h.indexOf($(this).data("item_name")) === -1 && (t >= i && (t + o) / 2 < s || o >= i && o < s)) {
                    var n = {
                        event: "showcase_impression",
                        showcase_name: $(this).data("showcase_name"),
                        showcase_position: $(this).data("showcase_position"),
                        item_name: $(this).data("item_name"),
                        item_position: $(this).data("item_position"),
                        item_url: $(this).data("item_url")
                    };
                    dataLayer.push(n),
                    h.push($(this).data("item_name"))
                }
            }
        })
    }
    var i, s = !1, o = !0;
    i = navigator.userAgentData ? navigator.userAgentData.mobile : /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    var n = i
      , a = n ? ".product-list" : ".product-grid-item";
    "phone" == $("#appType").text() && (a = ".product-list");
    var r, l, d = n ? ".slick-slide>a>img" : ".banner-image";
    $(".hb-ca-re").length && (d = ".bn-re"),
    $(".striphb-ca-re").length && (r = ".stripbn-re"),
    $(".split-banner-data").length && (l = $(".split-banner-data"));
    var c = ".drawer-card"
      , h = []
      , u = ($("#user-data").data("usrc"),
    $("#user-data").data("userid"),
    micrositename,
    [])
      , p = [];
    "products" === $("body").data("page") || window.location.pathname.slice(1),
    $(document).ready(function() {
        function e(e) {
            try {
                return h[e]
            } catch (e) {
                return -1
            }
        }
        function i() {
            s && console.log("done scroll"),
            s && console.log("Ids to be sent: " + p.join(",")),
            s && console.log("Ids already sent: " + m.join(","));
            var t = []
              , i = []
              , n = []
              , a = 0;
            p.forEach(s=>{
                var o = e(s);
                t.push(o),
                i.push(o.pid),
                n.push(o.position),
                a++
            }
            ),
            i.length > 0 && n.length > 0 && i.length === n.length ? (window.location.host,
            "search" === window.location.pathname.slice(1) ? (window.location.pathname.slice(1),
            window.location.search) : window.location.pathname.slice(1),
            m = m.concat(i)) : 0 == i.length && 0 === n.length ? o && console.log() : o && console.log("Firing impression failed --- prodIdCollection and prodPositionCollection mismatch ---------------", JSON.stringify(i), JSON.stringify(n)),
            clearTimeout(c)
        }
        function r() {
            var e = $(window).height()
              , i = $(document).scrollTop()
              , s = i
              , o = i + e
              , r = [];
            $(a).each(function(e) {
                if (!$(this).parent().hasClass("hide") && !$(this).parent().is("#tp-gs") && !$(this).hasClass("slick-slide") || $(this).hasClass("slick-slide") && $(this).hasClass("slick-active")) {
                    var t, i = $(this).offset().top, a = i + $(this).height(), l = $(this).data("pid"), d = $(this).data("sku"), c = $(this).data("name"), u = $(this).data("price"), m = $(this).data("vid"), f = $(this).data("barcode"), g = $(this).data("personalise"), v = micrositename, y = $(this).data("is_promoted"), w = $(this).data("promoted_tag"), b = $(this).data("widget-name"), C = $(this).hasClass("slick-slide") ? $(this).data("slick-index") + 1 : parseInt(e) + 1;
                    if (b || (n ? (t = Array.from($(this).parents()).find(e=>{
                        if ("product-grid-wrapper mar-err-prod-list" == e.className || "product-grid-wrapper recommended-products-wrapper" == e.className || "product-grid-wrapper product-grid-wrapper-reco bg-light" == e.className || "trending-products-carousel2 row product-grid-wrapper no-margin" == e.className)
                            return e
                    }
                    )) || (t = Array.from($(this).parents()).find(e=>{
                        if ("section-content carousel" == e.className || "edp-group-wrapper igp-rebrand--scroll bg-light gw-edp-wrapper" == e.className)
                            return e
                    }
                    )) : (t = Array.from($(this).parents()).find(e=>{
                        if ("section-content carousel" == e.className || "recommendation-carousel" == e.className)
                            return e
                    }
                    )) || (t = Array.from($(this).parents()).find(e=>{
                        if ("edp-group-wrapper bg-dark gw-edp-wrapper" == e.className || "edp-group-wrapper strip-carousel bg-light igp-rebrand-edp-group-wrapper gw-edp-wrapper" == e.className)
                            return e
                    }
                    ))),
                    t && (b = t.previousSibling.innerText ? t.previousSibling.innerText : t.previousElementSibling.innerText,
                    b.indexOf(":") && b.indexOf("|") && (b = b.split(":")[0].trim())),
                    (i >= s && (i + a) / 2 < o || a >= s && a < o) && p.indexOf(l) === -1) {
                        var k = {
                            position: C,
                            pid: l,
                            id: l,
                            name: c,
                            price: u,
                            brand: v,
                            category: "",
                            sku: d,
                            list: "ProductListing",
                            dimension17: location.pathname,
                            prods_type: "72" == m ? "Handels" : g ? "Personalised" : "Generic",
                            strip_title: b,
                            barcodes: f,
                            is_promoted: y,
                            promoted_tag: w
                        };
                        h[l] = k,
                        p.push(l),
                        r.push(k)
                    }
                }
            }),
            d(r),
            $(".footer-banner").each(function(e) {
                var t = $(this).offset().top
                  , i = t + $(this).height();
                if (u.indexOf($(this).data("item_name")) === -1 && (t >= s && (t + i) / 2 < o || i >= s && i < o)) {
                    var n = {
                        event: "banner_impression",
                        item_url: window.location.origin + $(this).data("item_url"),
                        item_name: $(this).data("item_name"),
                        item_position: $(this).data("item_position"),
                        banner_live_date: "NA",
                        banner_category: $(this).data("banner_category"),
                        micrositename: micrositename
                    };
                    dataLayer.push(n),
                    u.push($(this).data("item_name"))
                }
            }),
            l && $(l).each(function(e) {
                var t = $(this).offset().top
                  , i = t + $(this).height();
                if (u.indexOf($(this).data("item_name")) === -1 && (t >= s && (t + i) / 2 < o || i >= s && i < o)) {
                    var n = {
                        event: "banner_impression",
                        item_url: window.location.origin + $(this).data("item_url"),
                        item_name: $(this).data("item_name"),
                        item_position: $(this).data("item_position"),
                        banner_live_date: "NA",
                        banner_category: "split banner",
                        micrositename: micrositename
                    };
                    dataLayer.push(n),
                    u.push($(this).data("item_name"))
                }
            }),
            $(".inpage-banner").each(function(e) {
                var t = $(this).offset().top
                  , i = t + $(this).height();
                if (u.indexOf($(this).children()[0].title) === -1 && (t >= s && (t + i) / 2 < o || i >= s && i < o)) {
                    var n = {
                        event: "banner_impression",
                        item_url: $(this).children()[0].href,
                        item_name: $(this).children()[0].dataset.title,
                        item_position: e + 1,
                        banner_live_date: "NA",
                        banner_category: "inpage",
                        micrositename: micrositename
                    };
                    dataLayer.push(n),
                    u.push($(this).children()[0].title)
                }
            }),
            t()
        }
        function d(e) {
            if (e.length > 0) {
                var t = {
                    event: "product_impression",
                    impressions: [],
                    micrositename: micrositename
                };
                for (var i in e)
                    t.impressions.push(e[i]);
                dataLayer.push(t)
            }
        }
        var c, h = sessionStorage.getItem("products_storage") ? JSON.parse(sessionStorage.getItem("products_storage")) : {}, p = sessionStorage.getItem("sendItems") ? JSON.parse(sessionStorage.getItem("sendItems")) : [], m = sessionStorage.getItem("sentItems") ? JSON.parse(sessionStorage.getItem("sentItems")) : [], f = !0;
        sessionStorage.getItem("PImpressionURL") !== window.location.href && (sessionStorage.removeItem("products_storage"),
        h = {},
        sessionStorage.removeItem("sendItems"),
        p = [],
        sessionStorage.removeItem("sentItems"),
        m = [],
        sessionStorage.setItem("PImpressionURL", window.location.href)),
        window.addEventListener("beforeunload", function(e) {
            o && console.log("===============================Page Reload==========================="),
            sessionStorage.setItem("PImpressionURL", window.location.href),
            sessionStorage.setItem("products_storage", JSON.stringify(h)),
            sessionStorage.setItem("sentItems", JSON.stringify(m))
        }),
        $(document).scroll(function() {
            f === !1 ? (clearTimeout(c),
            r(),
            c = setTimeout(i, 700)) : (f = !1,
            r(),
            i())
        }),
        $(document).on("click", ".slick-next.slick-arrow", function() {
            r();
            var e, t = "";
            n ? (e = Array.from($(this).parents()).find(e=>{
                if ("product-grid-wrapper mar-err-prod-list" == e.className || "product-grid-wrapper recommended-products-wrapper" == e.className)
                    return e
            }
            )) || (e = Array.from($(this).parents()).find(e=>{
                if ("section-content carousel" == e.className)
                    return e
            }
            )) : (e = Array.from($(this).parents()).find(e=>{
                if ("section-content carousel" == e.className || "recommendation-carousel" == e.className)
                    return e
            }
            )) || (e = Array.from($(this).parents()).find(e=>{
                if ("edp-group-wrapper bg-dark gw-edp-wrapper" == e.className)
                    return e
            }
            )),
            e && (t = e.previousSibling.innerText ? e.previousSibling.innerText : e.previousElementSibling.innerText,
            t.indexOf(":") && t.indexOf("|") && (t = t.split(":")[0].trim())),
            onclickDataLayer("arrow_click", {
                arrow_type: "Next",
                strip_name: t
            })
        }),
        $(document).on("click", ".slick-prev.slick-arrow", function() {
            r();
            var e, t = "";
            n ? (e = Array.from($(this).parents()).find(e=>{
                if ("product-grid-wrapper mar-err-prod-list" == e.className || "product-grid-wrapper recommended-products-wrapper" == e.className)
                    return e
            }
            )) || (e = Array.from($(this).parents()).find(e=>{
                if ("section-content carousel" == e.className)
                    return e
            }
            )) : (e = Array.from($(this).parents()).find(e=>{
                if ("section-content carousel" == e.className || "recommendation-carousel" == e.className)
                    return e
            }
            )) || (e = Array.from($(this).parents()).find(e=>{
                if ("edp-group-wrapper bg-dark gw-edp-wrapper" == e.className)
                    return e
            }
            )),
            e && (t = e.previousSibling.innerText ? e.previousSibling.innerText : e.previousElementSibling.innerText,
            t.indexOf(":") && t.indexOf("|") && (t = t.split(":")[0].trim())),
            onclickDataLayer("arrow_click", {
                arrow_type: "Prev",
                strip_name: t
            })
        }),
        r()
    }),
    $(document).on("click", a, function() {
        if (event && event.target && !event.target.classList.contains("sl-star") && event.target.parentElement && event.target.parentElement.classList && !event.target.parentElement.classList.contains("s-icon") && !event.target.parentElement.classList.contains("sl-icon-star") && !event.target.parentElement.classList.contains("sl-star")) {
            o && console.log();
            var e, t = ($(this).data("pid"),
            $(this).index() + 1), i = ($(this).data("url") && $(this).data("url").split(".html")[0].slice(1),
            $(this).data("pid")), s = $(this).data("name"), a = $(this).data("sku"), r = $(this).data("price"), l = $(this).data("vid"), d = $(this).data("barcode"), c = $(this).data("personalise"), h = "5" == window.storeid || "1671" == window.storeid ? "IGP" : "Interflora", u = "", p = $(this).data("is_promoted"), m = $(this).data("promoted_tag"), f = $(this).data("widget-name");
            if ($(this).hasClass("slick-slide")) {
                var g = 0;
                $(this).parent().children().each(function(e) {
                    $(this).hasClass("slick-cloned") || ($(this).data("pid") == i && (t = g + 1),
                    g++)
                })
            }
            f || (n ? (e = Array.from($(this).parents()).find(e=>{
                return "product-grid-wrapper mar-err-prod-list" == e.className || "trending-products-carousel2 row product-grid-wrapper no-margin" == e.className ? e : "product-grid-wrapper recommended-products-wrapper" == e.className || "product-grid-wrapper product-grid-wrapper-reco bg-light" == e.className ? e : void 0
            }
            )) || (e = Array.from($(this).parents()).find(e=>{
                if ("section-content carousel" == e.className)
                    return e
            }
            )) : (e = Array.from($(this).parents()).find(e=>{
                return "section-content carousel" == e.className ? e : "recommendation-carousel" == e.className ? e : void 0
            }
            )) || (e = Array.from($(this).parents()).find(e=>{
                if ("edp-group-wrapper bg-dark gw-edp-wrapper" == e.className || "edp-group-wrapper strip-carousel bg-light igp-rebrand-edp-group-wrapper gw-edp-wrapper" == e.className)
                    return e
            }
            ))),
            e && (f = e.previousSibling.innerText ? e.previousSibling.innerText : e.previousElementSibling.innerText,
            f.indexOf(":") && f.indexOf("|") && (f = f.split(":")[0].trim()));
            var v = {
                event: "product_click",
                name: s,
                id: i,
                price: r,
                brand: h,
                category: u,
                position: t,
                sku: a,
                prods_type: "72" == l ? "Handels" : c ? "Personalised" : "Generic",
                strip_title: f,
                barcodes: d,
                micrositename: micrositename,
                pageurl: `${window.location.host}${window.location.pathname}`,
                is_promoted: p,
                promoted_tag: m
            };
            return window.location.host,
            "search" === window.location.pathname.slice(1) ? (window.location.pathname.slice(1),
            window.location.search) : window.location.pathname.slice(1),
            dataLayer.push(v),
            !0
        }
    });
    var m, f = n ? $(".gateway-banner-carousel1") : $(".home-banner-carousel");
    n || "corporate-gifts" != micrositename || (f = $(".corp-home-banner-carousel")),
    $(".hb-ca-re").length && (f = $(".hb-ca-re")),
    $(".striphb-ca-re").length && (m = $(".striphb-ca-re")),
    1 === $(".hb-ca-re .banner-slide").length && e(),
    f.on("afterChange", function(t, i, s, o) {
        e()
    }),
    f.on("init", function(t, i, s, o) {
        e()
    }),
    m && (m.on("afterChange", function(t, i, s, o) {
        e()
    }),
    m.on("init", function(t, i, s, o) {
        e()
    })),
    $(".img-responsive").on("click", function(e, t) {
        var i = $(window).height()
          , s = $(document).scrollTop()
          , o = s
          , n = s + i;
        if (e.target.closest(".inpage-banner")) {
            var a = $(this).offset().top
              , r = a + $(this).height();
            if (a >= o && (a + r) / 2 < n || r >= o && r < n) {
                var l = {
                    event: "banner_click",
                    item_url: $(this)[0].href,
                    item_name: $(this)[0].dataset.title,
                    banner_live_date: "NA",
                    banner_category: "inpage",
                    micrositename: micrositename
                };
                dataLayer.push(l),
                u.push($(this).title)
            }
        }
    }),
    $(".highlights .button-left").on("click", function() {
        t()
    }),
    $(".highlights .button-right").on("click", function() {
        t()
    }),
    $(".highlights .prev-btn").on("click", function() {
        t()
    }),
    $(".highlights .next-btn").on("click", function() {
        t()
    })
}();
;