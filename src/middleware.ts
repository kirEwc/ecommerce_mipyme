import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const authToken = request.cookies.get('auth-token'); // Token de autenticación regular
  const userRoleCookie = request.cookies.get('user-role'); // Cookie que contiene el rol del usuario
  const authTokenGoogle = request.cookies.get('next-auth.session-token'); // Token de autenticación con Google

  const userRole = userRoleCookie ? userRoleCookie.value : undefined;
   
console.log('authToken'+authToken)

  const restrictedRoutes = ['/login', '/register', '/recoveryPassword', '/verifyCode', '/confirmPassword'];
  // const adminRoutes = ['/adminPanel','/addTicket'];

  if (authToken || authTokenGoogle) {
    if (restrictedRoutes.some((route) => request.nextUrl.pathname.startsWith(route))) {
      return NextResponse.redirect(new URL('/', request.url));
    }

  //   if (adminRoutes.some((route) => request.nextUrl.pathname.startsWith(route))) {
  //     if (userRole !== 'admin') {
  //       return NextResponse.redirect(new URL('/', request.url));
  //     }
  //   }
  // } else {
  //   if (adminRoutes.some((route) => request.nextUrl.pathname.startsWith(route))) {
  //     return NextResponse.redirect(new URL('/', request.url));
  //   }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/login', 
    '/register', 
    '/recoveryPassword', 
    '/verifyCode', 
    '/confirmPassword',
    
  ],
};
