import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

export const middleware = (request: NextRequest) => {
    const url = request.nextUrl.clone();
    console.log(`url: ${url}`);
    console.log(`pathname: ${url.pathname}`);

    if (request.headers.get('accept-language')?.startsWith('zh-CN')) {
        if (url.pathname == '/') {
            url.pathname = '/cn';
            return NextResponse.redirect(url)
        } else 
        if (url.pathname.startsWith('/en')) {
            url.pathname = `${url.pathname}`.replace('/en',"/cn");
            return NextResponse.redirect(url)
        }
    } else {
        if (url.pathname == '/') {
            url.pathname = '/en';
            return NextResponse.redirect(url)
        } else
        if (url.pathname.startsWith('/cn')) {
            url.pathname = `${url.pathname}`.replace('/cn',"/en");;
            return NextResponse.redirect(url)
        }
    }
    if (url.pathname.endsWith('/demo')) {
        if (!request.cookies.get('name') || request.cookies.get('name')?.value != 'af') {
            return NextResponse.redirect('http://www.baidu.com');
        }
    }
    // url.host;
    // request.nextUrl.origin
    // // 检查 baseUrl 是否符合预期
    // if (request.nextUrl.origin !== 'https://expected-base-url.com') {
    //     // 重定向到一个正确的 URL 或显示错误页面
    //     const url = request.nextUrl.clone();
    //     url.pathname = '/404'; // 或者其他自定义的错误页面
    //     return NextResponse.redirect(url);
    // }
    return NextResponse.next();
};

export const config = {
    // matcher: '/:path*'
    matcher: ['/cn/:path*', '/en/:path*', '/:path',]
    // matcher: [
    //     {
    //         source: '/:path*',
    //         has: [
    //             {
    //                 type: 'cookie',
    //                 key: 'name',
    //                 value: '123'
    //             }
    //         ]
    //     }
    // ]
    // matcher: ['/(b*)']
};