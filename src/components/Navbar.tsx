import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from '@/components/ui/sheet';
import { TranslateBtn } from './TranslateBtn';
import { useTranslation } from 'react-i18next';
import logo from '../assets/img/logo.png'
export const Navbar = () => {
  const { t } = useTranslation();
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
      <header>
        <div
            className={`
        fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b
        ${isSticky ? 'bg-white shadow-md border-gray-200' : 'bg-white border-transparent'}
    `}
        >
          <nav className='max-w-7xl mx-auto flex items-center justify-between px-6 py-3 md:py-4'>
            {/* Лого */}
            <Link
                to='/'
                className='text-orange-600 font-bold text-2xl tracking-tight hover:opacity-90 transition flex items-center'
            >
              BoxyFox
              <img width='70px' className='ml-[-30px]' src={logo} alt="BoxyFox"/>
            </Link>

            {/* Десктоп навігація */}
            <div className='hidden md:flex items-center gap-8 text-sm text-gray-700 font-medium'>
              <NavLink
                  to='/'
                  className={({ isActive }) =>
                      isActive
                          ? 'text-orange-600 underline underline-offset-4'
                          : 'hover:text-orange-600 transition-colors'
                  }
              >
                {t('Home')}
              </NavLink>
              <NavLink
                  to='/about'
                  className={({ isActive }) =>
                      isActive
                          ? 'text-orange-600 underline underline-offset-4'
                          : 'hover:text-orange-600 transition-colors'
                  }
              >
                {t('About')}
              </NavLink>

              {/* Language Selector */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                      variant='outline'
                      size='sm'
                      className='border-gray-300 hover:border-orange-500'
                  >
                    {t('lng')}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent side='bottom' align='end' className='w-36 shadow-md'>
                  <DropdownMenuItem>
                    <TranslateBtn lang='en' label='English' />
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <TranslateBtn lang='ua' label='Українська' />
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Мобільне меню */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant='ghost' className='md:hidden'>
                  <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-6 w-6 text-gray-800'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                  >
                    <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M4 6h16M4 12h16M4 18h16'
                    />
                  </svg>
                </Button>
              </SheetTrigger>

              <SheetContent side='right' className='w-64 p-5 bg-white'>
                <SheetHeader>
                  <SheetTitle className='text-lg font-bold text-orange-600'>Menu</SheetTitle>
                  <SheetClose asChild />
                </SheetHeader>

                <nav className='flex flex-col mt-6 gap-5 text-gray-700 text-sm'>
                  <NavLink
                      to='/'
                      className={({ isActive }) =>
                          isActive ? 'text-orange-600 font-semibold' : 'hover:text-orange-600 transition'
                      }
                  >
                    {t('Home')}
                  </NavLink>
                  <NavLink
                      to='/about'
                      className={({ isActive }) =>
                          isActive ? 'text-orange-600 font-semibold' : 'hover:text-orange-600 transition'
                      }
                  >
                    {t('About')}
                  </NavLink>

                  <div className='mt-6'>
                    <p className='text-xs text-gray-500 mb-2 uppercase'>{t('lng')}</p>
                    <div className='flex flex-col gap-2'>
                      <TranslateBtn lang='en' label='English' />
                      <TranslateBtn lang='ua' label='Українська' />
                    </div>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </nav>
        </div>
      </header>
  );
};
