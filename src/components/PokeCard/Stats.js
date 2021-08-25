import React from "react";
import styled from "styled-components";

const StatsStyled = styled.li`
  margin: 12px 0;
  .range {
    position: relative;
  }
  .stat-type {
    text-transform: capitalize;
  }
  .stat-range {
    width: 100%;
    display: block;
    height: 3px;
    background: var(--grey);
  }
  .stat-range-applied {
    position: absolute;
    left: 0;
    top: 0;
    height: 3px;
    &.hp {
      background: #94faab;
    }
    &.attack {
      background: var(--red);
    }
    &.defense {
      background: var(--blue);
    }
    &.special-attack {
      background: #4ddbfd;
    }
    &.special-defense {
      background: #f6de57;
    }
    &.speed {
      background: #e900b6;
    }
  }
`;

const Stats = ({ base_stat, stat }) => {
  return (
    <StatsStyled>
      <span className="stat-type">{stat.name}</span>
      <div className="range">
        <span className="stat-range"></span>
        <span
          className={`stat-range-applied ${stat.name} `}
          style={{ width: base_stat + "%" }}
        ></span>
      </div>
      <span className="stat-number">{base_stat}</span>
    </StatsStyled>
  );
};

export default Stats;
