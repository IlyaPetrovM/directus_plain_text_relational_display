
import Options from './options.vue';
import DisplayComponent from './display.vue';

export default {
	id: 'custom_plain_text_relational_display',
	name: 'Plain Text Relational Display',
	description: 'Displays collection items divided by commas, dots etc.',
	icon: 'settings_ethernet',
	handler: DisplayComponent,
	types: ['alias', 'string', 'uuid', 'integer', 'bigInteger', 'json'],
    fields(options) {
        let fields = getFieldsFromTemplate(options.template);
        fields.push('id');
        return fields; // Остоожно! Если ключ назван как-то по другому то всё сломается!
    },
    
	options: Options,
};

 function getFieldsFromTemplate(template) {
	if (template === null) return [];

	const regex = /{{(.*?)}}/g;
	let fields = template.match(regex);

	if (!Array.isArray(fields)) {
		return [];
	}

	fields = fields.map((field) => {
		return field.replace(/{{/g, '').replace(/}}/g, '').trim();
	});

	return fields;
}