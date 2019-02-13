<template>
  <ul class="main-menu">
    <li class="sub-header">
      <span>Menu</span>
    </li>
    <li>
      <router-link :to="{ name: 'Dashboard'}">
        <div class="icon-w">
          <div class="os-icon os-icon-layout"></div>
        </div>
        <span>Dashboard</span>
      </router-link>
    </li>
    <li class="has-sub-menu">
      <a>
        <div class="icon-w">
          <div class="os-icon os-icon-file-text"></div>
        </div>
        <span>Orders</span>
      </a>
      <div class="sub-menu-w">
        <div class="sub-menu-header">
          Orders
        </div>
        <div class="sub-menu-icon">
          <i class="os-icon os-icon-file-text"></i>
        </div>
        <div class="sub-menu-i">
          <ul class="sub-menu">
            <li>
              <router-link :to="{ name: 'OrdersNew'}">
                <span>New</span>
              </router-link>
            </li>
            <li>
              <router-link :to="{ name: 'Orders'}">
                <span>Orders</span>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </li>
    <li class="has-sub-menu">
      <a>
        <div class="icon-w">
          <div class="os-icon os-icon-dollar-sign"></div>
        </div>
        <span>Financial</span>
      </a>
      <div class="sub-menu-w">
        <div class="sub-menu-header">
          Financial
        </div>
        <div class="sub-menu-icon">
          <i class="os-icon os-icon-dollar-sign"></i>
        </div>
        <div class="sub-menu-i">
          <ul class="sub-menu">
            <li>
              <router-link :to="{ name: 'FinancialWithdraw'}">
                <span>Withdraw</span>
              </router-link>
            </li>
            <li>
              <router-link :to="{ name: 'FinancialTransactions'}">
                <span>Transactions</span>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </li>
    <li class="sub-header">
      <span>MMN</span>
    </li>
    <li class="has-sub-menu">
      <a>
        <div class="icon-w">
          <div class="os-icon os-icon-more-horizontal"></div>
        </div>
        <span>Genealogy</span>
      </a>
      <div class="sub-menu-w">
        <div class="sub-menu-header">
          Genealogy
        </div>
        <div class="sub-menu-icon">
          <i class="os-icon os-icon-more-horizontal"></i>
        </div>
        <div class="sub-menu-i">
          <ul class="sub-menu">
            <li>
              <router-link :to="{ name: 'GenealogyUnilevel'}">
                <span>Unilevel</span>
              </router-link>
            </li>
            <li>
              <router-link :to="{ name: 'GenealogyBinary'}">
                <span>Binary</span>
              </router-link>
            </li>
            <li>
              <router-link :to="{ name: 'genealogyScoreBinary'}">
                <span>Score Binary</span>
              </router-link>
            </li>
            <li>
              <router-link :to="{ name: 'genealogyScoreUnilevel'}">
                <span>Score Unilevel</span>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </li>
  </ul>
</template>
