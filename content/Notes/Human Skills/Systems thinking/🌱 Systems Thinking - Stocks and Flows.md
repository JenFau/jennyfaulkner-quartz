---
publish: true
created: 2025-06-17
modified: 2025-10-27
---

## Key Definitions

**Stock**: A quantity that accumulates over time. Think of it as the "store" or the “level” in the system.

- Examples: number of active users, backlog of support tickets, technical debt, trust in a team, availability of training data, inventory, cost commitments.
- Note: it is not just physical stock.

**Flow**: A rate at which a stock changes—either inflow (adding to the stock) or outflow (removing from it).

- Examples: new users per week, tickets closed per day, code written, trust-building actions, data degradation.

Some of these are not obvious or immediately visible. Instead, you observe their effects over time and by the time they become visible, it is often too late to fix quickly.

Think of a **bathtub**:

- The water in the tub is the stock.
- The tap is the inflow, the drain is the outflow.
- The level of water (stock) changes depending on the difference between the inflow and outflow over time.

You can’t change the level of the bathtub instantly, even if you turn the tap on full blast. This delay is critical. Most real-world systems behave the same way.

## Practical Work Examples in Work

[[🌱 Systems Thinking - identifying stocks in a process]]

|System|Stock|Inflow|Outflow|
|---|---|---|---|
|Customer support|Open tickets|New tickets submitted|Tickets resolved|
|Sales pipeline|Opportunities in progress|Leads qualified|Deals closed/lost|
|Knowledge base|Useful articles|Articles written|Articles outdated or removed|
|Staff engagement|Team morale|Positive experiences, recognition|Burnout, conflict, neglect|

## Why Stocks and Flows Matter in Practice

1. They drive system behaviour over time. What you see—whether it’s improvement or decline—is shaped by the balance of inflows and outflows.
2. They introduce delays. Stocks change gradually, even when flows change quickly. This can obscure the impact of interventions or make problems feel ‘sudden’.
3. They reveal where to intervene. Often, you can achieve more by adjusting a flow than by trying to “fix” the stock directly.

| Stock     | Risk if Mismanaged                                                   |
| --------- | -------------------------------------------------------------------- |
| Backlog   | Work piles up → delays → customer dissatisfaction                    |
| Knowledge | Staff churn or poor documentation → institutional memory loss        |
| Trust     | Repeated poor service → slow erosion of customer or employee loyalty |
| Inventory | Overstock or understock → cashflow or delivery failure               |
| Budget    | Commitments locked in too early → rigidity, missed opportunity       |

## Strategic Implications

- **Don’t chase the stock without managing the flows**. Example: For fewer support tickets, don’t just pressure the team to reduce the backlog. Instead, investigate why the inflow is high - unclear documentation? Defective product?
- **Flows are easier to influence directly**. Hiring and training staff (inflow to team capability) is usually more effective than simply demanding better performance (a stock-level goal).
- **Some stocks have natural limits**. Inventory, for example, can’t grow indefinitely. This needs to be accounted for when planning.

## Tips for Applying This Thinking

- Track both the **rate** and the **level**: It's not enough to know how many tasks are completed; know how many are incoming.
- Design **dashboards** that distinguish between stocks and flows.
  - Example: Display open tickets (stock) and weekly ticket inflow/outflow (flows) separately.
- Look for **hidden stocks**: trust, motivation, fatigue, data quality—these accumulate silently and influence system performance.

## Common Misunderstandings

- Mistaking **flows** for causes: A sudden drop in throughput is often due to a depleted stock (e.g. backlog, skilled staff), not the flow itself.
- Ignoring **outflows**: Focusing only on improving inputs (e.g. training) without managing losses (e.g. attrition) leads to leakage.
- Expecting instant results: Interventions on flows take time to affect the stock. Be aware of delays and plan accordingly.
