// orderByAggregate
ga.addAggregate('COUNT', 'category');
ga.orderByAggregate('count', 'category');
ga.query();
while(ga.next()) {
  gs.info('Category: ' + ga.category + ' ' + ga.getAggregate('COUNT', 'category'));
}




// setGroup(Boolean b)
var ga = new GlideAggregate('incident');
ga.addAggregate('COUNT', 'category');
 
ga.setGroup(true);
ga.groupBy("category");
 
ga.query();
 
while(ga.next())
{
  gs.info('Category ' + ga.category + ' ' + ga.getAggregate('COUNT', 'category'));
}