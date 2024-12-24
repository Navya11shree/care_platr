import React, { useEffect, useRef } from 'react';

const SearchComponent: React.FC = () => {
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cloud.google.com/ai/gen-app-builder/client?hl=en_US';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div ref={widgetRef}>
      <gen-search-widget
        configid="e6a01d81-7e83-43f9-8fa9-1545b9275a6c"
        triggerid="searchWidgetTrigger"
      ></gen-search-widget>
      <input placeholder="Search here" id="searchWidgetTrigger" />
    </div>
  );
};

export default SearchComponent;
