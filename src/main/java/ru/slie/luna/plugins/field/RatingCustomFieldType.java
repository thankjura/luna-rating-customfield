package ru.slie.luna.plugins.field;

import ru.slie.luna.exception.ValidateException;
import ru.slie.luna.issue.IssueContext;
import ru.slie.luna.issue.bulk.BulkActionContext;
import ru.slie.luna.issue.field.IssueField;
import ru.slie.luna.issue.field.context.IssueFieldContext;
import ru.slie.luna.issue.field.options.Option;
import ru.slie.luna.issue.field.options.OptionsManager;
import ru.slie.luna.issue.field.type.AbstractFieldType;
import ru.slie.luna.locale.I18nResolver;

import java.util.List;
import java.util.Map;

public class RatingCustomFieldType extends AbstractFieldType<Option, Option> {
    private final OptionsManager optionsManager;
    private final I18nResolver i18n;

    public RatingCustomFieldType(OptionsManager optionsManager,
                                 I18nResolver i18n) {
        this.optionsManager = optionsManager;
        this.i18n = i18n;
    }

    @Override
    public String getName() {
        return "Rating field type";
    }

    @Override
    public Option getValueFromDB(IssueField field, Object dbValue) {
        if (dbValue instanceof Number) {
            return optionsManager.getOptionById(field, ((Number) dbValue).longValue());
        }

        return null;
    }

    private boolean isNumber(Object value) {
        if (value instanceof Number) {
            return true;
        } else if (value instanceof String s) {
            try {
                Integer.parseInt(s);
                return true;
            } catch (NumberFormatException e) {
                return false;
            }
        }

        return false;
    }

    @Override
    public Object getValueForDB(IssueField field, Option value) {
        if (value == null) {
            return null;
        }
        return value.getId();
    }

    @Override
    public Option parseJson(IssueField field, IssueContext context, Object jsonValue) {
        if (jsonValue instanceof Number) {
            return optionsManager.getOptionById(field, ((Number) jsonValue).longValue());
        } else if (jsonValue instanceof String &&  context != null) {
            return optionsManager.getOptionByName(field.getContext(context), (String) jsonValue);
        } else if (jsonValue instanceof Map<?,?> jsonMap) {
            if (isNumber(jsonMap.get("id"))) {
                return optionsManager.getOptionById(field, Long.parseLong(jsonMap.get("id").toString()));
            } else if (jsonMap.containsKey("name")) {
                return optionsManager.getOptionByName(field.getContext(context), jsonMap.get("name").toString());
            }
        }

        return null;
    }

    @Override
    public Option toJson(IssueField field, Option value) {
        // TODO: validate context
        return value;
    }

    @Override
    public String getChangeItemString(IssueField field, Option value) {
        return getStringValue(field, value);
    }

    @Override
    public String getStringValue(IssueField field, Option value) {
        if (value == null) {
            return null;
        }
        return value.getName();
    }

    @Override
    public void validateValue(IssueField field, Object value, ValidateException exception) {
        if (value != null && !(value instanceof Option)) {
            exception.addError(field.getId(), i18n.getText("app.field_type.single_select.bad_value"));
        }
    }

    @Override
    public List<String> getSupportedFieldSearcherKey() {
        return List.of("ru.slie.luna.issue.field.searcher.impl.OptionsSearcher");
    }

    @Override
    public Map<String, Object> getViewParams(IssueField field, IssueFieldContext context, Option value) {
        return Map.of("options", context.getOptions());
    }

    @Override
    public Map<String, Object> getEditParams(IssueField field, IssueFieldContext fieldContext, Option value) {
        return Map.of("options", fieldContext.getOptions());
    }

    @Override
    public Map<String, Object> getEditParams(IssueField field, BulkActionContext actionContext) {
        return Map.of("options", List.of());
    }
}
