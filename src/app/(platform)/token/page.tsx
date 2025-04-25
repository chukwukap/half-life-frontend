"use client";

import { FC } from "react";
import { TokenExplorer, FilterBar, TokensTable } from "./_components";

const TokenPage: FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <TokenExplorer />
      <FilterBar />
      <TokensTable />
    </div>
  );
};

export default TokenPage;
