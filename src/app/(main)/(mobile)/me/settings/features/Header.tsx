'use client';

import { MobileNavBar, MobileNavBarTitle } from '@lobehub/ui/mobile';
import { useRouter } from 'next/navigation';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Flexbox } from 'react-layout-kit';

import { mobileHeaderSticky } from '@/styles/mobileHeader';

const Header = memo(() => {
  const { t } = useTranslation('common');

  const router = useRouter();
  return (
    <MobileNavBar
      center={
        <MobileNavBarTitle
          title={
            <Flexbox align={'center'} gap={4} horizontal>
              {t('userPanel.setting')}
            </Flexbox>
          }
        />
      }
      onBackClick={() => router.push('/me')}
      showBackButton
      style={mobileHeaderSticky}
    />
  );
});

export default Header;
